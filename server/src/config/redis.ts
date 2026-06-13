import * as redis from 'redis';
import { Logger } from '../utils/logger';

const logger = new Logger('Redis');

let redisClient: redis.RedisClient | null = null;

export async function connectRedis(): Promise<redis.RedisClient> {
  if (redisClient?.isOpen) {
    return redisClient;
  }

  try {
    const client = redis.createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379/0',
      socket: {
        reconnectStrategy: (retries) => {
          const delay = Math.min(retries * 50, 500);
          return delay;
        },
      },
    });

    client.on('error', (error) => {
      logger.error('Redis client error:', error);
    });

    client.on('connect', () => {
      logger.info('Redis connected');
    });

    client.on('ready', () => {
      logger.info('Redis ready');
    });

    client.on('reconnecting', () => {
      logger.warn('Redis reconnecting');
    });

    await client.connect();
    redisClient = client;

    return client;
  } catch (error) {
    logger.error('Failed to connect Redis:', error);
    throw error;
  }
}

export function getRedisClient(): redis.RedisClient {
  if (!redisClient || !redisClient.isOpen) {
    throw new Error('Redis client not connected');
  }
  return redisClient;
}

export async function disconnectRedis() {
  if (redisClient?.isOpen) {
    await redisClient.quit();
    logger.info('Redis disconnected');
  }
}

// Cache operations
export async function setCache(key: string, value: any, expirySeconds?: number) {
  const client = getRedisClient();
  const serialized = JSON.stringify(value);
  
  if (expirySeconds) {
    await client.setEx(key, expirySeconds, serialized);
  } else {
    await client.set(key, serialized);
  }
}

export async function getCache<T = any>(key: string): Promise<T | null> {
  const client = getRedisClient();
  const cached = await client.get(key);
  
  if (!cached) {
    return null;
  }

  try {
    return JSON.parse(cached) as T;
  } catch {
    return cached as T;
  }
}

export async function deleteCache(key: string) {
  const client = getRedisClient();
  await client.del(key);
}

export async function clearCache(pattern: string) {
  const client = getRedisClient();
  const keys = await client.keys(pattern);
  
  if (keys.length > 0) {
    await client.del(keys);
  }
}

export default {
  connectRedis,
  getRedisClient,
  disconnectRedis,
  setCache,
  getCache,
  deleteCache,
  clearCache,
};
