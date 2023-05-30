import express from 'express';
//import * as cardController from '../controllers/card.js';
import {verifyToken} from '../../middleware/auth.js';

const router = express.Router();

/* READ */

/* UPDATE */
router.post("/", verifyToken, );
router.put("/", verifyToken, );

/* DELETE */


export default router;