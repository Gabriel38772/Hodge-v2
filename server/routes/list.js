import express from 'express';
import listController from '..controllers/list';
import {verifyToken} from '../middleware/auth.js';

const router = express.Router();

router.post("/", verifyToken, listController.createNewList);
router.put("/", verifyToken, listController.updateList);
router.delete("/:listId", verifyToken, listController.deleteList);

export default router;
