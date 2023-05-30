import express from 'express';
import { createProject, getProject  } from '../controllers/projects.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* CREATE */
router.post("/", verifyToken, createProject);

/* READ */
router.get("/:projectId", verifyToken, getProject);

/* UPDATE */
//router.patch("/:id/like", verifyToken, saveProject);

export default router;