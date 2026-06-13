import mongoose, { Schema, Document } from 'mongoose';
import { IOrder } from '@gadariya/shared';

interface IOrderDocument extends IOrder, Document {}

const orderSchema = new Schema<IOrderDocument>(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        vendorId: {
          type: Schema.Types.ObjectId,
          ref: 'Vendor',
        },
        variantId: {
          type: Schema.Types.ObjectId,
          ref: 'ProductVariant',
        },
        name: String,
        sku: String,
        quantity: Number,
        price: Number,
        image: String,
        color: String,
        size: String,
        status: String,
      },
    ],
    shippingAddress: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
    },
    billingAddress: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
    },
    subtotal: Number,
    shippingCost: {
      type: Number,
      default: 0,
    },
    taxAmount: Number,
    discountAmount: {
      type: Number,
      default: 0,
    },
    couponCode: String,
    totalAmount: Number,
    paymentMethod: {
      type: String,
      enum: ['razorpay', 'stripe', 'cod'],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    orderStatus: {
      type: String,
      enum: [
        'pending',
        'confirmed',
        'packed',
        'shipped',
        'delivered',
        'cancelled',
        'returned',
      ],
      default: 'pending',
    },
    trackingId: String,
    notes: String,
  },
  {
    timestamps: true,
    collection: 'orders',
  }
);

orderSchema.index({ orderId: 1 });
orderSchema.index({ userId: 1 });
orderSchema.index({ paymentStatus: 1 });
orderSchema.index({ orderStatus: 1 });

export const Order = mongoose.model<IOrderDocument>('Order', orderSchema);
