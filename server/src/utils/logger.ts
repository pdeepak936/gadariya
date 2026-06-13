import pino, { Logger as PinoLogger } from 'pino';

const isDevelopment = process.env.NODE_ENV === 'development';

const transport = isDevelopment
  ? pino.transport({
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      },
    })
  : undefined;

const pinoLogger = pino(
  {
    level: process.env.LOG_LEVEL || 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
    base: {
      app: 'gadariya-server',
      environment: process.env.NODE_ENV,
    },
  },
  transport
);

export class Logger {
  private context: string;
  private logger: PinoLogger;

  constructor(context: string) {
    this.context = context;
    this.logger = pinoLogger;
  }

  info(message: string, meta?: any) {
    this.logger.info({ context: this.context, ...meta }, message);
  }

  warn(message: string, meta?: any) {
    this.logger.warn({ context: this.context, ...meta }, message);
  }

  error(message: string, error?: any) {
    this.logger.error({ context: this.context, error }, message);
  }

  debug(message: string, meta?: any) {
    this.logger.debug({ context: this.context, ...meta }, message);
  }
}

export { pinoLogger };
