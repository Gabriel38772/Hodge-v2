import express from 'express';
//import * as listController from '../controllers/list.js';
import {verifyToken} from '../../middleware/auth.js';

const router = express.Router();

router.post("/", verifyToken, );
router.put("/", verifyToken, );
router.delete("/:listId", verifyToken, );

export default router;
