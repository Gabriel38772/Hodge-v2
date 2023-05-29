import express from 'express';
import { createProject, getFeedProjects, getUserProjects, saveProject } from '../controllers/projects.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* CREATE 
router.get("/:userId/projects/new", verifyToken, createProject)
*/

/* READ */
router.get("/", verifyToken, getFeedProjects);
router.get("/:userId/projects", verifyToken, getUserProjects);

/* UPDATE */
router.patch("/:id/like", verifyToken, saveProject);

export default router;