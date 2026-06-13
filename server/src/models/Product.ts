import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from '@gadariya/shared';

interface IProductDocument extends IProduct, Document {}

const productSchema = new Schema<IProductDocument>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [255, 'Product name cannot exceed 255 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    sku: {
      type: String,
      required: [true, 'SKU is required'],
      unique: true,
    },
    barcode: String,
    brand: {
      type: String,
      required: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: 'Vendor',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: 'Subcategory',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: String,
    price: {
      type: Number,
      required: true,
      min: [0, 'Price cannot be negative'],
    },
    salePrice: {
      type: Number,
      required: true,
      min: [0, 'Sale price cannot be negative'],
    },
    costPrice: {
      type: Number,
      min: [0, 'Cost price cannot be negative'],
    },
    gst: {
      type: Number,
      default: 0,
      min: [0, 'GST cannot be negative'],
      max: [100, 'GST cannot exceed 100'],
    },
    hsnCode: String,
    weight: Number,
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, 'Stock cannot be negative'],
    },
    lowStockThreshold: {
      type: Number,
      default: 10,
    },
    images: [String],
    videos: [String],
    colors: [String],
    sizes: [String],
    material: String,
    specifications: mongoose.Schema.Types.Mixed,
    features: [String],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    seoTitle: String,
    seoDescription: String,
    tags: [String],
  },
  {
    timestamps: true,
    collection: 'products',
  }
);

// Indexes for better query performance
productSchema.index({ slug: 1 });
productSchema.index({ sku: 1 });
productSchema.index({ category: 1 });
productSchema.index({ vendor: 1 });
productSchema.index({ isFeatured: 1 });
productSchema.index({ isActive: 1 });
productSchema.index({ rating: -1 });
productSchema.index({ price: 1 });
productSchema.text('name');
productSchema.text('description');

export const Product = mongoose.model<IProductDocument>('Product', productSchema);
