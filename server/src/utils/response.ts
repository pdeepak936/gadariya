import { Response } from 'express';
import { IApiResponse } from '@gadariya/shared';

export function sendSuccess<T = any>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T
): Response {
  const response: IApiResponse<T> = {
    success: true,
    statusCode,
    message,
    data,
  };

  return res.status(statusCode).json(response);
}

export function sendError(
  res: Response,
  statusCode: number,
  message: string,
  error?: string
): Response {
  const response: IApiResponse = {
    success: false,
    statusCode,
    message,
    error: error || message,
  };

  return res.status(statusCode).json(response);
}

export function sendPaginated<T>(
  res: Response,
  statusCode: number,
  message: string,
  data: T[],
  page: number,
  limit: number,
  total: number
): Response {
  const pages = Math.ceil(total / limit);
  const response = {
    success: true,
    statusCode,
    message,
    data,
    pagination: {
      page,
      limit,
      total,
      pages,
    },
  };

  return res.status(statusCode).json(response);
}
