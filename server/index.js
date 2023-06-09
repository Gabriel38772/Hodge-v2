import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import {fileURLToPath} from 'url';
import authRoutes from './routes/auth.js'; //Fil (auth) i mapp kallad route
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import savedRoutes from './routes/saved.js';
import projectRoutes from './routes/projects.js';
//For Kanban
import columnRoutes from './routes/kanban/column.js';
import listRoutes from './routes/kanban/list.js';
import taskRoutes from './routes/kanban/task.js';


import {register} from './controllers/auth.js';
import {createPost} from './controllers/posts.js';
import {createProject} from './controllers/projects.js';
import {createTask} from './controllers/kanban/tasks.js';
import {verifyToken} from './middleware/auth.js';
import { ppid } from 'process';
/*
import User from './models/user.js';
import Post from './models/post.js'; 
import Project from './models/project.js';
import Task from './models/kanban/task.js';
import {tasks, users, posts, projects} from './data/index.js';
 */

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({storage});

/* ROUTES WITH FILES 
      definierar hur clientens requests hanteras av applikationen. 
      Specifikt requests som hanterar filer.
      */

      /*
      post säger att du vill skapa en ny resurs
      Auth/register är den specifika vägen (route) som ska tas */
app.post('/auth/register', upload.single('picture'), register);
app.post('/posts', verifyToken, upload.single('picture'), createPost);
app.post('/project', verifyToken, upload.single('picture'), createProject);
app.post('/task', verifyToken, createTask);


/* ROUTES */
app.use('/auth', authRoutes); //??
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/saved', savedRoutes);
app.use('/projects', projectRoutes);
//Till Kanban
app.use('/column', columnRoutes);
app.use('list', listRoutes);
app.use('/task', taskRoutes);

/* MONGOOSE SETUP */
mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
    //Project.insertMany(projects);
    //Task.insertMany(tasks);
  })
  .catch((error) => console.log(`${error} did not connect`));