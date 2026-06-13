import jwt from 'jsonwebtoken';
import { Logger } from './logger';

const logger = new Logger('JWT');

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export function generateAccessToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', {
      expiresIn: process.env.JWT_EXPIRY || '15m',
    });
    return token;
  } catch (error) {
    logger.error('Failed to generate access token', error);
    throw error;
  }
}

export function generateRefreshToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
  try {
    const token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET || 'refresh-secret', {
      expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d',
    });
    return token;
  } catch (error) {
    logger.error('Failed to generate refresh token', error);
    throw error;
  }
}

export function verifyAccessToken(token: string): JWTPayload {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret') as JWTPayload;
    return payload;
  } catch (error) {
    logger.error('Failed to verify access token', error);
    throw error;
  }
}

export function verifyRefreshToken(token: string): JWTPayload {
  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET || 'refresh-secret') as JWTPayload;
    return payload;
  } catch (error) {
    logger.error('Failed to verify refresh token', error);
    throw error;
  }
}

export function decodeToken(token: string): JWTPayload | null {
  try {
    const payload = jwt.decode(token) as JWTPayload;
    return payload;
  } catch (error) {
    logger.error('Failed to decode token', error);
    return null;
  }
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = decodeToken(token);
    if (!payload) return true;
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}
