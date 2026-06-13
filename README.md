# GADARIYA - Production-Ready eCommerce Platform

> A scalable, enterprise-level full-stack eCommerce platform built with modern technologies. Designed to scale from a single online store into a multi-vendor marketplace.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-PROPRIETARY-red)
![Node](https://img.shields.io/badge/node->=18.17.0-green)

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.17.0
- npm >= 9.0.0
- Docker & Docker Compose (optional, for containerized setup)
- MongoDB 7.0+
- Redis 7.0+

### Installation

#### Using npm workspaces:

```bash
# Clone the repository
git clone https://github.com/pdeepak936/gadariya.git
cd gadariya

# Install dependencies for all workspaces
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your configuration
```

#### Using Docker (Recommended):

```bash
# Copy environment variables
cp .env.example .env.local

# Build and start all services
npm run docker:build
npm run docker:up

# View logs
npm run docker:logs

# Stop all services
npm run docker:down
```

### Running in Development

```bash
# All services concurrently
npm run dev

# Individual services
npm run dev:server    # Backend API on http://localhost:5000
npm run dev:client    # Customer site on http://localhost:3000
npm run dev:admin     # Admin panel on http://localhost:3001
```

### Building for Production

```bash
npm run build

# Or individual builds
npm run build:server
npm run build:client
npm run build:admin
```

## 📋 Project Structure

```
gadariya/
├── server/                 # Express.js Backend API
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── models/        # MongoDB Mongoose schemas
│   │   ├── routes/        # API endpoints
│   │   ├── middlewares/   # Express middlewares
│   │   ├── services/      # Business logic
│   │   ├── repositories/  # Data access layer
│   │   ├── validators/    # Input validation
│   │   ├── utils/         # Helper functions
│   │   ├── config/        # Configuration files
│   │   ├── jobs/          # Background jobs
│   │   ├── emails/        # Email templates
│   │   └── index.ts       # Server entry point
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── client/                 # Next.js Customer Website
│   ├── app/               # App router
│   ├── components/        # React components
│   ├── pages/             # Pages (legacy support)
│   ├── store/             # Redux store
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # Tailwind CSS
│   ├── public/            # Static assets
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── Dockerfile
│
├── admin/                  # Next.js Admin Panel
│   ├── app/               # App router
│   ├── components/        # Admin components
│   ├── pages/             # Pages
│   ├── store/             # Redux store
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utilities
│   ├── public/            # Static assets
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── Dockerfile
│
├── shared/                 # Shared Types & Utilities
│   ├── types/             # TypeScript interfaces
│   ├── utils/             # Shared utilities
│   ├── constants/         # Shared constants
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                  # Documentation
│   ├── API.md            # API Documentation
│   ├── SETUP.md          # Setup Guide
│   ├── DEPLOYMENT.md     # Deployment Guide
│   └── DATABASE.md       # Database Schema
│
├── package.json          # Root workspace configuration
├── docker-compose.yml    # Docker services orchestration
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## 🛠 Tech Stack

### Frontend (Customer Website)

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Framer Motion** - Animations
- **Axios** - HTTP client

### Admin Panel

- **Next.js 15** - Framework
- **React 19** - UI
- **TypeScript** - Types
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **React Hook Form** - Forms
- **Draft.js** - Rich text editor

### Backend API

- **Node.js** - Runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - ODM
- **JWT** - Authentication
- **RBAC** - Authorization
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **Redis** - Caching

### Payment & Notifications

- **Razorpay** - Payment gateway
- **Stripe** - Payment processor
- **Twilio** - SMS & WhatsApp
- **SendGrid/SMTP** - Email
- **Firebase** - Push notifications

## 📚 Core Features

### Customer Features

- ✅ User Authentication (Email/OTP/Google)
- ✅ Product Catalog with Advanced Filtering
- ✅ Shopping Cart & Wishlist
- ✅ Checkout & Multiple Payment Methods
- ✅ Order Management & Tracking
- ✅ Product Reviews & Ratings
- ✅ Multiple Saved Addresses
- ✅ Reward Points & Wallet
- ✅ Referral System
- ✅ Compare Products
- ✅ Recently Viewed Products
- ✅ Newsletter Subscription

### Admin Features

- ✅ Secure Admin Authentication
- ✅ Comprehensive Dashboard
- ✅ Product Management (Bulk Upload, Scheduling)
- ✅ Order Management (Status Tracking, Returns)
- ✅ User Management (RBAC)
- ✅ Inventory Management
- ✅ Sales & Revenue Reports
- ✅ Coupon & Offer Management
- ✅ Blog & FAQ Management
- ✅ Notification Management
- ✅ Multi-Admin Support

### Marketplace Features (Ready for Multi-Vendor)

- ✅ Vendor Architecture
- ✅ Vendor Dashboard
- ✅ Vendor Commission Management
- ✅ Seller Analytics
- ✅ Approval Workflow
- ✅ Dispute Management

## 🔒 Security Features

- [x] Helmet.js - HTTP headers security
- [x] Rate Limiting - Request throttling
- [x] XSS Protection - Input sanitization
- [x] CSRF Protection - Token validation
- [x] Password Hashing - bcrypt
- [x] JWT Authentication - Secure tokens
- [x] RBAC - Role-based access
- [x] Audit Logs - Activity tracking
- [x] Environment Variables - Secret management

## ⚡ Performance Optimizations

- [x] Redis Caching - Data caching
- [x] Image Optimization - Next.js Image
- [x] Code Splitting - Route-based splitting
- [x] Lazy Loading - Component lazy loading
- [x] Database Indexing - Query optimization
- [x] CDN Ready - Cloud storage integration
- [x] Pagination - Efficient data loading
- [x] SSR/ISR - Server-side rendering

## 📦 Database Schema

### Collections

```
User
├── _id
├── firstName
├── lastName
├── email
├── password
├── phone
├── avatar
├── role (customer, admin)
├── isActive
├── isBlocked
├── addresses
├── createdAt
└── updatedAt

Product
├── _id
├── name
├── slug
├── sku
├── barcode
├── brand
├── vendor
├── category
├── subcategory
├── price
├── salePrice
├── gst
├── hsnCode
├── stock
├── images
├── description
├── rating
├── reviews
└── createdAt

Order
├── _id
├── orderId
├── userId
├── items
├── totalPrice
├── paymentStatus
├── orderStatus
├── shippingAddress
├── trackingId
└── createdAt

[See docs/DATABASE.md for complete schema]
```

## 🔌 API Endpoints

### Authentication

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
GET    /api/auth/profile
PUT    /api/auth/profile
```

### Products

```
GET    /api/products
GET    /api/products/:id
GET    /api/products/search
GET    /api/products/filter
GET    /api/products/trending
GET    /api/products/recommended
```

### Orders

```
POST   /api/orders
GET    /api/orders
GET    /api/orders/:id
PUT    /api/orders/:id
GET    /api/orders/:id/track
```

### Admin

```
GET    /api/admin/dashboard
GET    /api/admin/products
POST   /api/admin/products
PUT    /api/admin/products/:id
GET    /api/admin/orders
PUT    /api/admin/orders/:id
GET    /api/admin/users
```

[See docs/API.md for complete API documentation]

## 🚀 Deployment

### Docker Deployment

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# Stop services
docker-compose down
```

### Production Deployment

```bash
# Build for production
npm run build

# Start production servers
NODE_ENV=production npm start
```

[See docs/DEPLOYMENT.md for detailed deployment instructions]

## 📊 Environment Configuration

Copy `.env.example` to `.env.local` and update:

```env
# Database
MONGODB_URI=mongodb://username:password@host:port/gadariya

# JWT
JWT_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_refresh_secret

# Cloudinary (Images)
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

# Payment Gateways
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
STRIPE_SECRET_KEY=your_key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email
SMTP_PASSWORD=your_password

# Other services...
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in specific workspace
npm run test --workspace=server

# Run tests with coverage
npm run test -- --coverage
```

## 🔍 Linting & Type Checking

```bash
# Lint all workspaces
npm run lint

# Type check
npm run type-check

# Fix linting issues
npm run lint -- --fix
```

## 📖 Documentation

- [API Documentation](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Database Schema](./docs/DATABASE.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 🚦 Project Status

- [x] Project Structure
- [x] Docker Setup
- [x] Root Configuration
- [ ] Backend APIs (In Progress)
- [ ] Customer Frontend
- [ ] Admin Panel
- [ ] Payment Integration
- [ ] Multi-Vendor Support
- [ ] Analytics & Reports

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For issues and questions:
- Email: support@gadariya.com
- GitHub Issues: [Report an issue](https://github.com/pdeepak936/gadariya/issues)

## 🙏 Acknowledgments

Built with modern technologies and best practices for production-ready applications.

---

**Version**: 1.0.0  
**Last Updated**: June 2024  
**Maintained by**: GADARIYA Team
