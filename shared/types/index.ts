// User & Auth Types
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
  avatar?: string;
  role: 'customer' | 'admin' | 'vendor';
  isActive: boolean;
  isBlocked: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  addresses: IAddress[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IAdmin {
  _id: string;
  email: string;
  password?: string;
  name: string;
  avatar?: string;
  role: 'super_admin' | 'admin' | 'manager' | 'staff' | 'inventory_manager' | 'support';
  permissions: string[];
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IVendor {
  _id: string;
  userId: string;
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  gstNumber?: string;
  panNumber?: string;
  bankDetails: {
    accountNumber: string;
    bankName: string;
    ifscCode: string;
    accountHolder: string;
  };
  address: IAddress;
  logo?: string;
  banner?: string;
  description?: string;
  isApproved: boolean;
  isActive: boolean;
  commissionRate: number;
  earnings: number;
  walletBalance: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAddress {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  isDefault: boolean;
  addressType: 'home' | 'office' | 'other';
}

// Product Types
export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  sku: string;
  barcode?: string;
  brand: string;
  vendor: string;
  category: string;
  subcategory: string;
  description: string;
  shortDescription?: string;
  price: number;
  salePrice: number;
  costPrice?: number;
  gst: number;
  hsnCode?: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  stock: number;
  lowStockThreshold: number;
  images: string[];
  videos?: string[];
  colors?: string[];
  sizes?: string[];
  material?: string;
  specifications?: Record<string, string>;
  features?: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductVariant {
  _id: string;
  productId: string;
  sku: string;
  color?: string;
  size?: string;
  price: number;
  salePrice: number;
  stock: number;
  images: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  icon?: string;
  isActive: boolean;
  isParent: boolean;
  parent?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISubcategory {
  _id: string;
  name: string;
  slug: string;
  categoryId: string;
  description?: string;
  image?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Cart & Order Types
export interface ICart {
  _id: string;
  userId: string;
  items: ICartItem[];
  totalPrice: number;
  totalTax: number;
  totalDiscount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICartItem {
  _id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  salePrice: number;
  color?: string;
  size?: string;
}

export interface IOrder {
  _id: string;
  orderId: string;
  userId: string;
  items: IOrderItem[];
  shippingAddress: IAddress;
  billingAddress?: IAddress;
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  couponCode?: string;
  totalAmount: number;
  paymentMethod: 'razorpay' | 'stripe' | 'cod';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  trackingId?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderItem {
  _id: string;
  productId: string;
  vendorId: string;
  variantId?: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  image: string;
  color?: string;
  size?: string;
  status: string;
}

export interface IPayment {
  _id: string;
  orderId: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  paymentGateway: 'razorpay' | 'stripe';
  transactionId: string;
  status: 'pending' | 'completed' | 'failed';
  response: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

// Wishlist & Reviews
export interface IWishlist {
  _id: string;
  userId: string;
  products: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IReview {
  _id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  helpful: number;
  notHelpful: number;
  isVerified: boolean;
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IQuestion {
  _id: string;
  productId: string;
  userId: string;
  question: string;
  answer?: string;
  answeredBy?: string;
  helpful: number;
  createdAt: Date;
  updatedAt: Date;
}

// Coupon & Offer
export interface ICoupon {
  _id: string;
  code: string;
  description?: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue?: number;
  maxDiscount?: number;
  usageLimit?: number;
  usageCount: number;
  userUsageLimit?: number;
  applicableCategories?: string[];
  applicableProducts?: string[];
  excludeProducts?: string[];
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOffer {
  _id: string;
  title: string;
  description?: string;
  banner?: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  applicableProducts: string[];
  applicableCategories?: string[];
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFlashSale {
  _id: string;
  title: string;
  description?: string;
  banner?: string;
  products: {
    productId: string;
    salePrice: number;
    quantity: number;
  }[];
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Notifications
export interface INotification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: 'order' | 'promotion' | 'system' | 'review';
  link?: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEmail {
  to: string;
  subject: string;
  template: string;
  data: Record<string, any>;
  attachments?: Array<{
    filename: string;
    path: string;
  }>;
}

// Returns & Refunds
export interface IReturnRequest {
  _id: string;
  orderId: string;
  orderItemId: string;
  reason: string;
  description: string;
  images?: string[];
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  refundAmount: number;
  approvedBy?: string;
  approvalDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReplacementRequest {
  _id: string;
  orderId: string;
  orderItemId: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  newProductId?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRefundRequest {
  _id: string;
  orderId: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  amount: number;
  transactionId?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Analytics & Reporting
export interface IDashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  totalVendors: number;
  pendingOrders: number;
  refundRequests: number;
  lowStockItems: number;
}

export interface ISalesReport {
  date: Date;
  orders: number;
  revenue: number;
  profit: number;
  returns: number;
  refunds: number;
}

// Blog & CMS
export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  isPublished: boolean;
  publishedAt?: Date;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFAQ {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface IApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  statusCode: number;
}

export interface IPaginationParams {
  page: number;
  limit: number;
  sort?: string;
  search?: string;
}

export interface IPaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Filter & Search Types
export interface IProductFilter {
  category?: string;
  subcategory?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  color?: string;
  size?: string;
  inStock?: boolean;
  discount?: {
    min?: number;
    max?: number;
  };
  sort?: 'newest' | 'price-low' | 'price-high' | 'rating' | 'popularity';
}

// Error Types
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
