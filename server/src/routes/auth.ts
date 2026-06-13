import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authMiddleware } from '../utils/middleware';

const router = Router();

// Public routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/refresh', AuthController.refreshToken);

// Protected routes
router.get('/profile', authMiddleware, AuthController.getProfile);
router.post('/logout', authMiddleware, AuthController.logout);

export default router;
