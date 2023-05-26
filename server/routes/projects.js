import express from 'express';
import { getFeedProjects, getUserProjects, likeProject } from '../controllers/projects';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedProjects);
router.get("/:userId/posts", verifyToken, getUserProjects);

/* UPDATE */
router.patch("/:id/like", verifyToken, likeProject)