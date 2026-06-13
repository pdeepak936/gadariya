import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import { Logger } from './logger';

const logger = new Logger('Middleware');

// Security middleware
export function securityMiddleware() {
  return helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https:'],
      },
    },
  });
}

// CORS middleware
export function corsMiddleware() {
  return cors({
    origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
    credentials: true,
    optionsSuccessStatus: 200,
  });
}

// Rate limiting middleware
export function rateLimitMiddleware() {
  return rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        success: false,
        message: 'Too many requests',
        error: 'Rate limit exceeded',
      });
    },
  });
}

// Auth middleware
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
        error: 'No token provided',
      });
    }

    const { verifyAccessToken } = require('./jwt');
    const payload = verifyAccessToken(token);
    
    req.user = {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
    };

    next();
  } catch (error) {
    logger.error('Auth middleware error', error);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
      error: 'Invalid or expired token',
    });
  }
}

// Data sanitization middleware
export function sanitizationMiddleware() {
  return mongoSanitize({
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
      logger.warn(`Sanitized key: ${key}`);
    },
  });
}

// Error handling middleware
export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error('Error handler caught:', error);

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  });
}

// 404 handler
export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Route not found',
    error: `${req.method} ${req.path}`,
  });
}

// Request logging middleware
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
  next();
}
