import bcrypt from 'bcryptjs';
import { Logger } from './logger';

const logger = new Logger('Password');

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  } catch (error) {
    logger.error('Failed to hash password', error);
    throw error;
  }
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    logger.error('Failed to verify password', error);
    throw error;
  }
}
