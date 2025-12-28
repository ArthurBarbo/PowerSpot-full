import express from 'express';
import { verifyToken } from '../middlewares/auth.js';
import { getFavorites, toggleFavorite } from '../controllers/favorites.js';

const router = express.Router();

router.get('/', verifyToken, getFavorites);
router.post('/', verifyToken, toggleFavorite);

export default router;
