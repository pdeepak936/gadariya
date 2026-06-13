# GADARIYA API Documentation

## Base URL

Development: `http://localhost:5000/api`
Production: `https://api.gadariya.com/api`

## Quick Start

All protected endpoints require Bearer token:
```
Authorization: Bearer <ACCESS_TOKEN>
```

## Core Endpoints

### Authentication

- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get user profile (protected)
- `POST /auth/logout` - Logout (protected)
- `POST /auth/refresh` - Refresh token
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password with token

### Products

- `GET /products` - List all products (pagination, filtering)
- `GET /products/:id` - Get product details
- `GET /products/search` - Search products
- `GET /products/filter` - Filter products by criteria
- `GET /products/trending` - Get trending products
- `GET /products/recommended` - Get recommended products

### Categories

- `GET /categories` - Get all categories
- `GET /categories/:id` - Get category details
- `GET /categories/:id/subcategories` - Get subcategories
- `GET /categories/:id/products` - Get products in category

### Cart (Protected)

- `POST /cart` - Add to cart
- `GET /cart` - Get cart
- `PUT /cart/:itemId` - Update cart item
- `DELETE /cart/:itemId` - Remove from cart
- `POST /cart/clear` - Clear entire cart

### Orders (Protected)

- `POST /orders` - Create order
- `GET /orders` - Get user orders
- `GET /orders/:id` - Get order details
- `PUT /orders/:id/status` - Update order status
- `GET /orders/:id/track` - Track order
- `POST /orders/:id/cancel` - Cancel order

### Wishlist (Protected)

- `GET /wishlist` - Get wishlist
- `POST /wishlist` - Add to wishlist
- `DELETE /wishlist/:productId` - Remove from wishlist

### Reviews (Protected)

- `POST /products/:id/reviews` - Add product review
- `GET /products/:id/reviews` - Get product reviews
- `PUT /reviews/:id` - Update review
- `DELETE /reviews/:id` - Delete review

### Payment

- `POST /payment/create` - Create payment
- `POST /payment/verify` - Verify payment
- `GET /payment/:orderId` - Get payment details

## Response Format

```json
{
  "success": boolean,
  "statusCode": number,
  "message": string,
  "data": any
}
```

## Error Codes

| Code | Message |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 500 | Server Error |

For detailed API documentation, see the full [API.md](./docs/API.md) file.
