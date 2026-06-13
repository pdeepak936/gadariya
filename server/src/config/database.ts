import mongoose from 'mongoose';
import { Logger } from '../utils/logger';

const logger = new Logger('Database');

export async function connectDatabase() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/gadariya';
    
    await mongoose.connect(mongoUri, {
      // Mongoose connection options
    });

    logger.info('Database connected successfully');

    // Handle connection events
    mongoose.connection.on('disconnected', () => {
      logger.warn('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
      logger.error('Database error:', error);
    });

  } catch (error) {
    logger.error('Failed to connect database:', error);
    process.exit(1);
  }
}

export async function disconnectDatabase() {
  try {
    await mongoose.disconnect();
    logger.info('Database disconnected');
  } catch (error) {
    logger.error('Failed to disconnect database:', error);
  }
}

export default mongoose;
