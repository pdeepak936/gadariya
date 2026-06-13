import mongoose, { Schema, Document } from 'mongoose';
import { ICategory } from '@gadariya/shared';

interface ICategoryDocument extends ICategory, Document {}

const categorySchema = new Schema<ICategoryDocument>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: String,
    image: String,
    icon: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    isParent: {
      type: Boolean,
      default: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
    collection: 'categories',
  }
);

categorySchema.index({ slug: 1 });
categorySchema.index({ parent: 1 });

export const Category = mongoose.model<ICategoryDocument>('Category', categorySchema);
