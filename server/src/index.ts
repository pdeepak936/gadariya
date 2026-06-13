import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { connectDatabase, disconnectDatabase } from './config/database';
import { connectRedis, disconnectRedis } from './config/redis';
import { initializeEmail } from './config/email';
import { initializeCloudinary } from './config/cloudinary';
import {
  securityMiddleware,
  corsMiddleware,
  sanitizationMiddleware,
  errorHandler,
  notFoundHandler,
  requestLogger,
} from './utils/middleware';
import { Logger } from './utils/logger';
import { sendSuccess } from './utils/response';

// Load environment variables
dotenv.config();

const app: Express = express();
const logger = new Logger('Server');

// Initialize third-party services
async function initializeServices() {
  try {
    await connectDatabase();
    await connectRedis();
    initializeEmail();
    initializeCloudinary();
    logger.info('All services initialized');
  } catch (error) {
    logger.error('Failed to initialize services', error);
    process.exit(1);
  }
}

// Middleware
app.use(securityMiddleware());
app.use(corsMiddleware());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(sanitizationMiddleware());
app.use(requestLogger);

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  sendSuccess(res, 200, 'Server is running', {
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api', (req: Request, res: Response) => {
  sendSuccess(res, 200, 'GADARIYA eCommerce API', {
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      products: '/api/products',
      categories: '/api/categories',
      orders: '/api/orders',
      admin: '/api/admin',
    },
  });
});

// TODO: Import and use routes
// import authRoutes from './routes/auth';
// import productRoutes from './routes/products';
// import orderRoutes from './routes/orders';
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Graceful shutdown
async function gracefulShutdown() {
  logger.info('Shutting down gracefully...');
  try {
    await disconnectDatabase();
    await disconnectRedis();
    process.exit(0);
  } catch (error) {
    logger.error('Error during shutdown', error);
    process.exit(1);
  }
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start server
async function startServer() {
  try {
    await initializeServices();

    const PORT = process.env.APP_PORT || 5000;
    const server = app.listen(PORT, () => {
      logger.info(`Server started on port ${PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV}`);
    });

    // Handle unhandled errors
    process.on('uncaughtException', (error) => {
      logger.error('Uncaught exception', error);
      process.exit(1);
    });

    process.on('unhandledRejection', (reason) => {
      logger.error('Unhandled rejection', reason);
      process.exit(1);
    });
  } catch (error) {
    logger.error('Failed to start server', error);
    process.exit(1);
  }
}

// Export app for testing
export default app;

// Start if this is the main module
if (require.main === module) {
  startServer();
}
