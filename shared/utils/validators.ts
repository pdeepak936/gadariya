import { z } from 'zod';

// Auth Validators
export const registerSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const passwordResetSchema = z.object({
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const updateProfileSchema = z.object({
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50).optional(),
  phone: z.string().optional(),
  avatar: z.string().url().optional(),
});

// Product Validators
export const createProductSchema = z.object({
  name: z.string().min(3).max(255),
  description: z.string().min(10),
  price: z.number().positive(),
  salePrice: z.number().positive(),
  costPrice: z.number().positive().optional(),
  category: z.string(),
  subcategory: z.string(),
  brand: z.string(),
  sku: z.string().min(3),
  stock: z.number().int().nonnegative(),
  gst: z.number().min(0).max(100),
  images: z.array(z.string().url()),
  colors: z.array(z.string()).optional(),
  sizes: z.array(z.string()).optional(),
  weight: z.number().positive().optional(),
  material: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const updateProductSchema = createProductSchema.partial();

// Cart Validators
export const addToCartSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().positive(),
  color: z.string().optional(),
  size: z.string().optional(),
});

// Order Validators
export const createOrderSchema = z.object({
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().int().positive(),
    color: z.string().optional(),
    size: z.string().optional(),
  })),
  shippingAddressId: z.string(),
  paymentMethod: z.enum(['razorpay', 'stripe', 'cod']),
  couponCode: z.string().optional(),
});

// Address Validators
export const addressSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/),
  addressLine1: z.string().min(5).max(255),
  addressLine2: z.string().max(255).optional(),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  pincode: z.string().regex(/^[0-9]{6}$/),
  addressType: z.enum(['home', 'office', 'other']),
  isDefault: z.boolean().optional(),
});

// Review Validators
export const reviewSchema = z.object({
  productId: z.string(),
  rating: z.number().int().min(1).max(5),
  title: z.string().min(5).max(100),
  comment: z.string().min(10).max(1000),
  images: z.array(z.string().url()).optional(),
});

// Coupon Validators
export const couponSchema = z.object({
  code: z.string().min(3).max(20).regex(/^[A-Z0-9]+$/),
  description: z.string().optional(),
  discountType: z.enum(['percentage', 'fixed']),
  discountValue: z.number().positive(),
  minOrderValue: z.number().optional(),
  maxDiscount: z.number().optional(),
  usageLimit: z.number().int().positive().optional(),
  startDate: z.date(),
  endDate: z.date(),
}).refine((data) => data.endDate > data.startDate, {
  message: 'End date must be after start date',
  path: ['endDate'],
});

// Category Validators
export const categorySchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().optional(),
  image: z.string().url().optional(),
  isParent: z.boolean().optional(),
});

// Helper function to validate data
export function validateData<T>(schema: z.ZodSchema, data: unknown): T {
  return schema.parse(data) as T;
}

// Helper function for safe validation with error handling
export function safeValidate<T>(schema: z.ZodSchema, data: unknown): { success: boolean; data?: T; errors?: Record<string, string> } {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated as T };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { success: false, errors };
    }
    return { success: false, errors: { general: 'Validation failed' } };
  }
}
