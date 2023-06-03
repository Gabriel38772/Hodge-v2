import express from 'express';
import {verifyToken} from '../../middleware/auth.js';
import { createTask  } from '../../controllers/kanban/tasks.js';


const router = express.Router();

/* CREATE */

router.post("/", verifyToken, createTask);

/* READ */
//router.get("/", verifyToken, getTask);


/* UPDATE */
router.post("/", verifyToken, );
router.put("/", verifyToken, );

/* DELETE */


export default router;