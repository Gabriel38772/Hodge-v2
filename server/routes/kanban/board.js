import express from 'express';
//import * as boardController from '../controllers/kanban/board.js';
import {verifyToken} from '../../middleware/auth.js';

const router = express.Router();

/* READ */
router.get("/", verifyToken, );
router.get("/:boardId", verifyToken, );


/* UPDATE */
router.put("/:boardId", verifyToken, );

/* CREATE */
router.post("/", verifyToken, );

/* DELETE */
router.delete("/:boardId", verifyToken,);

export default router;