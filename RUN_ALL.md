# 🚀 RUN ALL SERVICES AT ONCE

## Quick Start (One Command!)

```bash
npm run dev
```

This starts ALL three services simultaneously:
- **Backend API**: http://localhost:5000
- **Customer Website**: http://localhost:3000  
- **Admin Dashboard**: http://localhost:3001

---

## Complete Setup (5 Minutes)

### Step 1: Clone Repository
```bash
git clone https://github.com/pdeepak936/gadariya.git
cd gadariya
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Environment Variables
```bash
cp .env.example .env.local
cp server/.env.example server/.env.local
cp client/.env.example client/.env.local
cp admin/.env.example admin/.env.local
```

Edit `.env.local` and ensure MongoDB and Redis URLs are set:
```
MONGODB_URI=mongodb://localhost:27017/gadariya
REDIS_URL=redis://localhost:6379/0
```

### Step 4: Start Everything!
```bash
npm run dev
```

---

## Prerequisites Checklist

Before running `npm run dev`, make sure you have:

- [ ] Node.js 18+ installed (`node --version`)
- [ ] MongoDB running locally or have Atlas URL
- [ ] Redis running locally or have Redis Cloud URL
- [ ] Environment variables configured in `.env.local`

### Quick MongoDB Setup (macOS)
```bash
brew install mongodb-community
brew services start mongodb-community
```

### Quick Redis Setup (macOS)
```bash
brew install redis
brew services start redis
```

---

## What You'll See

When running `npm run dev`, you'll see:

```
[server] Starting backend...
[server] Database connected successfully
[server] Redis connected
[server] Server started on port 5000
[client] ▲ Next.js 15.0.0
[client] ready - started server on 0.0.0.0:3000
[admin] ▲ Next.js 15.0.0
[admin] ready - started server on 0.0.0.0:3001
```

---

## Access Your Services

| Service | URL | What It Is |
|---------|-----|-----------|
| **Backend** | http://localhost:5000 | Express API Server |
| **Health Check** | http://localhost:5000/api/health | API Status |
| **API Docs** | http://localhost:5000/api | API Overview |
| **Customer Site** | http://localhost:3000 | Main Store |
| **Admin Panel** | http://localhost:3001 | Admin Dashboard |

---

## Test It Works

### Check Backend is Running
```bash
curl http://localhost:5000/api/health
```

Response:
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Server is running",
  "data": {
    "status": "ok",
    "timestamp": "2024-06-13T09:25:31.070Z"
  }
}
```

### Register a Test User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "password": "SecurePass@123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass@123"
  }'
```

---

## Stop All Services

Press **Ctrl + C** in your terminal to stop all services gracefully.

```
^C
[server] Shutting down gracefully...
[client] stopped
[admin] stopped
All services stopped
```

---

## Run Services Separately (Alternative)

If you want to run services in separate terminals:

**Terminal 1: Backend**
```bash
npm run dev:server
```

**Terminal 2: Customer Website**
```bash
npm run dev:client
```

**Terminal 3: Admin Dashboard**
```bash
npm run dev:admin
```

---

## Docker Alternative (No Setup Required!)

If you don't want to install MongoDB and Redis locally:

```bash
# Build and start all services in Docker
npm run docker:build
npm run docker:up

# View logs
npm run docker:logs

# Stop everything
npm run docker:down
```

---

## Troubleshooting

### Error: Port 5000 already in use
```bash
# Find what's using port 5000
lsof -i :5000

# Kill the process (replace XXXX with PID)
kill -9 XXXX
```

### Error: Cannot connect to MongoDB
```bash
# Check if MongoDB is running
mongosh

# If not running:
brew services start mongodb-community
```

### Error: Cannot connect to Redis
```bash
# Check if Redis is running
redis-cli ping
# Should return: PONG

# If not running:
brew services start redis
```

### Error: Module not found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## What to Try After Startup

1. ✅ Open http://localhost:3000 (Customer website)
2. ✅ Open http://localhost:3001 (Admin dashboard)
3. ✅ Try registering a user with the curl command above
4. ✅ Login to your account
5. ✅ Check http://localhost:5000/api (API overview)

---

## Development Features

With all services running, you get:
- 🔥 **Hot Reload**: Changes auto-refresh (no restart needed)
- 📝 **Auto Format**: Code auto-formats on save
- 🧪 **Developer Tools**: Redux DevTools, Next.js DevTools
- 📊 **Network Logging**: Full request/response logging
- 🔍 **TypeScript**: Full type checking in your IDE

---

## Other Useful Commands

```bash
# Build for production
npm run build

# Run production build
npm start

# Run tests
npm run test

# Type checking
npm run type-check

# Linting
npm run lint

# Seed database with sample data
npm run seed
```

---

## Folder Structure Quick Reference

```
gadariya/
├── server/          ← Backend (Express) - :5000
├── client/          ← Customer Site (Next.js) - :3000
├── admin/           ← Admin Panel (Next.js) - :3001
├── shared/          ← Shared types & utilities
└── docs/            ← Documentation
```

---

## FAQ

**Q: Can I run just the backend?**
A: Yes! `npm run dev:server`

**Q: Can I run just the frontend?**
A: Yes! `npm run dev:client` (need backend running too)

**Q: How do I stop just one service?**
A: If running separately in different terminals, just Ctrl+C that terminal

**Q: Can I change the port numbers?**
A: Yes! Set `PORT=8000 npm run dev:server`

**Q: Do I need Docker?**
A: No! Local setup works fine. Docker is optional.

**Q: Where are the database and cache stored?**
A: MongoDB at `mongodb://localhost:27017` and Redis at `redis://localhost:6379`

---

## Next Steps

Once everything is running smoothly:

1. Read [API Documentation](./docs/API.md)
2. Try the [Product APIs](./docs/API.md#products)
3. Check [Contributing Guidelines](./CONTRIBUTING.md)
4. View [Project Status](./PROJECT_STATUS.md)

---

## 🎯 That's it! 

Run: **`npm run dev`** and you're good to go! 🚀

Open these URLs:
- Backend: http://localhost:5000
- Customer: http://localhost:3000
- Admin: http://localhost:3001

Happy coding! 💻
