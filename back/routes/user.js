import express from 'express';
import {
  registerUser,
  loginUser,
  getUserData,
  updateUserName,
} from '../controllers/users.js';
import { verifyToken } from '../middlewares/auth.js';
import { getFavorites, toggleFavorite } from '../controllers/favorites.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getUserData);
router.patch('/edit-name', verifyToken, updateUserName);

router.get('/favorites', verifyToken, getFavorites);
router.post('/favorites', verifyToken, toggleFavorite);

export default router;
