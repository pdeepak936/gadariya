// Common constants
export const ROLES = {
  CUSTOMER: 'customer',
  ADMIN: 'admin',
  VENDOR: 'vendor',
} as const;

export const ADMIN_ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MANAGER: 'manager',
  STAFF: 'staff',
  INVENTORY_MANAGER: 'inventory_manager',
  SUPPORT: 'support',
} as const;

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PACKED: 'packed',
  READY_TO_SHIP: 'ready_to_ship',
  SHIPPED: 'shipped',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned',
  REFUNDED: 'refunded',
  REPLACED: 'replaced',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

export const PAYMENT_METHODS = {
  RAZORPAY: 'razorpay',
  STRIPE: 'stripe',
  COD: 'cod', // Cash on Delivery
} as const;

export const DISCOUNT_TYPES = {
  PERCENTAGE: 'percentage',
  FIXED: 'fixed',
} as const;

export const ADDRESS_TYPES = {
  HOME: 'home',
  OFFICE: 'office',
  OTHER: 'other',
} as const;

export const NOTIFICATION_TYPES = {
  ORDER: 'order',
  PROMOTION: 'promotion',
  SYSTEM: 'system',
  REVIEW: 'review',
} as const;

export const REQUEST_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  COMPLETED: 'completed',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  NOT_FOUND: 'Resource not found',
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  PHONE_ALREADY_EXISTS: 'Phone number already registered',
  INVALID_OTP: 'Invalid or expired OTP',
  INVALID_TOKEN: 'Invalid or expired token',
  WEAK_PASSWORD: 'Password is too weak',
  CART_EMPTY: 'Cart is empty',
  INSUFFICIENT_STOCK: 'Insufficient stock',
  INVALID_COUPON: 'Invalid or expired coupon',
  PAYMENT_FAILED: 'Payment failed',
  ORDER_NOT_FOUND: 'Order not found',
  INTERNAL_ERROR: 'Internal server error',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  REGISTERED: 'Registration successful',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  PRODUCT_CREATED: 'Product created successfully',
  PRODUCT_UPDATED: 'Product updated successfully',
  PRODUCT_DELETED: 'Product deleted successfully',
  ORDER_CREATED: 'Order created successfully',
  PAYMENT_SUCCESS: 'Payment completed successfully',
  EMAIL_SENT: 'Email sent successfully',
} as const;

// Pagination
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 20;
export const MAX_LIMIT = 100;

// JWT Expiry
export const JWT_EXPIRY = {
  ACCESS: '15m',
  REFRESH: '7d',
  OTP: '5m',
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/mpeg'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword'],
} as const;

// Regular Expressions
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;

// Database
export const COLLECTION_NAMES = {
  USERS: 'users',
  ADMINS: 'admins',
  VENDORS: 'vendors',
  PRODUCTS: 'products',
  PRODUCT_VARIANTS: 'product_variants',
  CATEGORIES: 'categories',
  SUBCATEGORIES: 'subcategories',
  CARTS: 'carts',
  ORDERS: 'orders',
  PAYMENTS: 'payments',
  WISHLISTS: 'wishlists',
  REVIEWS: 'reviews',
  QUESTIONS: 'questions',
  COUPONS: 'coupons',
  OFFERS: 'offers',
  FLASH_SALES: 'flash_sales',
  NOTIFICATIONS: 'notifications',
  RETURN_REQUESTS: 'return_requests',
  REPLACEMENT_REQUESTS: 'replacement_requests',
  REFUND_REQUESTS: 'refund_requests',
  BLOGS: 'blogs',
  FAQS: 'faqs',
  CONTACT_MESSAGES: 'contact_messages',
  NEWSLETTER_SUBSCRIBERS: 'newsletter_subscribers',
} as const;

// Cache Keys
export const CACHE_KEYS = {
  PRODUCTS: 'products',
  CATEGORIES: 'categories',
  USER_CART: (userId: string) => `cart:${userId}`,
  USER_WISHLIST: (userId: string) => `wishlist:${userId}`,
  PRODUCT_DETAILS: (productId: string) => `product:${productId}`,
  FEATURED_PRODUCTS: 'featured_products',
  TRENDING_PRODUCTS: 'trending_products',
  TOP_SELLERS: 'top_sellers',
} as const;

// API Routes
export const API_ROUTES = {
  AUTH: '/api/auth',
  PRODUCTS: '/api/products',
  CATEGORIES: '/api/categories',
  CART: '/api/cart',
  ORDERS: '/api/orders',
  PAYMENT: '/api/payment',
  WISHLIST: '/api/wishlist',
  ADMIN: '/api/admin',
  USERS: '/api/users',
} as const;
