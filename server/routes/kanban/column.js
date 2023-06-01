import express from 'express';
//import * as boardController from '../controllers/kanban/board.js';
import {verifyToken} from '../../middleware/auth.js';

const router = express.Router();

/* READ */
router.get("/", verifyToken, );
router.get("/:columnId", verifyToken, );


/* UPDATE */
router.put("/:columnId", verifyToken, );

/* CREATE */
router.post("/", verifyToken, );

/* DELETE */
router.delete("/:columnId", verifyToken,);

export default router;