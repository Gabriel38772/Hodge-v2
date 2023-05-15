import express from 'express';
import cardController from '..controllers/card';
import {verifyToken} from '../middleware/auth.js';

const router = express.Router();

/* READ */

/* UPDATE */
router.post("/", verifyToken, cardController.createNewCard);
router.put("/", verifyToken, cardController.deleteCard);

/* DELETE */


export default router;