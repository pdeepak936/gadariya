import { v2 as cloudinary } from 'cloudinary';
import { Logger } from '../utils/logger';

const logger = new Logger('Cloudinary');

export function initializeCloudinary() {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    logger.info('Cloudinary initialized');
    return cloudinary;
  } catch (error) {
    logger.error('Failed to initialize Cloudinary:', error);
    throw error;
  }
}

export interface UploadOptions {
  folder?: string;
  resource_type?: 'auto' | 'image' | 'video' | 'raw';
  public_id?: string;
  transformation?: any;
}

export async function uploadFile(fileBuffer: Buffer, filename: string, options: UploadOptions = {}) {
  try {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: options.folder || 'gadariya',
          resource_type: options.resource_type || 'auto',
          public_id: options.public_id || filename.split('.')[0],
          ...options.transformation,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      uploadStream.end(fileBuffer);
    });
  } catch (error) {
    logger.error('Failed to upload file:', error);
    throw error;
  }
}

export async function deleteFile(publicId: string) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    logger.info(`File deleted: ${publicId}`);
    return result;
  } catch (error) {
    logger.error('Failed to delete file:', error);
    throw error;
  }
}

export default {
  initializeCloudinary,
  uploadFile,
  deleteFile,
  cloudinary,
};
