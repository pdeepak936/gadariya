# GADARIYA Database Schema

## Key Collections

### Users
- Basic user information and authentication
- Email, phone (unique indexed)
- Multiple addresses support
- Role-based (customer, admin, vendor)

### Products  
- Product details with variants
- Pricing, stock, images
- Full-text search indexed
- Category and vendor relationships

### Orders
- Order creation and tracking
- Status pipeline (pending → delivered)
- Multiple items per order
- Payment integration

### Categories & Subcategories
- Hierarchical structure
- Parent-child relationships
- Featured categories support

### Cart
- Shopping cart items
- Real-time pricing
- Quantity management

### Wishlist
- User product bookmarks
- Simple list structure

### Reviews
- Product ratings and feedback
- Verified purchase tracking
- Helpful voting system

### Coupons
- Discount codes
- Usage tracking
- Time-based validity

## Database Optimization

- Strategic indexing on frequently queried fields
- Aggregation pipelines for complex queries
- Pagination for large result sets
- Redis caching for hot data
- Connection pooling
- Query result caching

## Backup Strategy

- Daily incremental backups
- Weekly full backups
- Monthly archive to cold storage
- 1-year retention policy

MongoDB backup commands:
```bash
mongodump --uri="mongodb://user:pass@host/gadariya" --out=/backup

mongorestore --uri="mongodb://user:pass@host/gadariya" /backup
```

## Indexing Strategy

Create indexes on:
- `users.email` (unique)
- `users.phone` (unique)
- `products.slug` (unique)
- `products.category`
- `orders.userId`
- `orders.status`
- Text indexes for search
