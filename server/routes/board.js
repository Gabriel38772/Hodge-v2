import express from 'express';
import boardController from '..controllers/board';
import {verifyToken} from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get("/", verifyToken, boardController.getBoards);
router.get("/:boardId", verifyToken, boardController.getBoardById);


/* UPDATE */
router.put("/:boardId", verifyToken, boardController.updateBoard);

/* CREATE */
router.post("/", verifyToken, boardController.createNewBoard);

/* DELETE */
router.delete("/:boardId", verifyToken, boardController.deleteBoard);

export default router;