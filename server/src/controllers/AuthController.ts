import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { hashPassword, verifyPassword } from '../utils/password';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt';
import { sendSuccess, sendError } from '../utils/response';
import { ValidationError, AuthenticationError, ConflictError } from '../utils/errors';
import { Logger } from '../utils/logger';
import { registerSchema, loginSchema } from '@gadariya/shared';

const logger = new Logger('AuthController');

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, email, phone, password } = req.body;

      // Validate input
      try {
        registerSchema.parse(req.body);
      } catch (error: any) {
        throw new ValidationError(error.errors[0].message);
      }

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { phone }],
      });

      if (existingUser) {
        throw new ConflictError('Email or phone already registered');
      }

      // Hash password
      const hashedPassword = await hashPassword(password);

      // Create new user
      const user = new User({
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
        role: 'customer',
      });

      await user.save();

      logger.info(`User registered: ${email}`);

      // Generate tokens
      const accessToken = generateAccessToken({
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
      });

      const refreshToken = generateRefreshToken({
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
      });

      const userResponse = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };

      return sendSuccess(res, 201, 'User registered successfully', {
        user: userResponse,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      logger.error('Registration error', error);
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Validate input
      try {
        loginSchema.parse(req.body);
      } catch (error: any) {
        throw new ValidationError(error.errors[0].message);
      }

      // Find user
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        throw new AuthenticationError('Invalid email or password');
      }

      // Check if user is blocked
      if (user.isBlocked) {
        throw new AuthenticationError('User account is blocked');
      }

      // Verify password
      const isPasswordValid = await verifyPassword(password, user.password!);

      if (!isPasswordValid) {
        throw new AuthenticationError('Invalid email or password');
      }

      logger.info(`User logged in: ${email}`);

      // Generate tokens
      const accessToken = generateAccessToken({
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
      });

      const refreshToken = generateRefreshToken({
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
      });

      const userResponse = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };

      return sendSuccess(res, 200, 'Login successful', {
        user: userResponse,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      logger.error('Login error', error);
      next(error);
    }
  }

  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.userId;

      if (!userId) {
        throw new AuthenticationError('User not authenticated');
      }

      const user = await User.findById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      return sendSuccess(res, 200, 'Profile retrieved successfully', user);
    } catch (error) {
      logger.error('Get profile error', error);
      next(error);
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      logger.info('User logged out');
      return sendSuccess(res, 200, 'Logged out successfully');
    } catch (error) {
      logger.error('Logout error', error);
      next(error);
    }
  }

  static async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        throw new ValidationError('Refresh token is required');
      }

      const { verifyRefreshToken } = require('../utils/jwt');
      const payload = verifyRefreshToken(refreshToken);

      const newAccessToken = generateAccessToken({
        userId: payload.userId,
        email: payload.email,
        role: payload.role,
      });

      return sendSuccess(res, 200, 'Token refreshed successfully', {
        accessToken: newAccessToken,
      });
    } catch (error) {
      logger.error('Refresh token error', error);
      next(error);
    }
  }
}
