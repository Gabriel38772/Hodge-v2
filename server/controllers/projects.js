import Project from '../models/project.js';
import User from '../models/user.js'

/*Skapar projekt i mongoose */
export const createProject = async(req, res) => {
   try {
		const {userId, title, info, category, picturePath} = req.body;
		const user = await User.findById(userId);
		const newProject = new Project({
			projectOwnerId: user.userId,
			title,
			info,
			category,
			picturePath,
			members: []
		});

   	await newProject.save(); //Sparar projektet
		const project = await Project.find(); //Hämtar alla projects till front end för att flödet ska uppdateras
		res.status(201).json(project);

  	} catch (err) {
   	res.status(409).json({message: err.message});
	}
};

/* READ */
export const getFeedProjects = async (res) => {
	try {
	  const project = await Project.find();
	  res.status(200).json(project);
	} catch (err) {
	  res.status(404).json({message: err.message});
	}
 };
 
export const getUserProjects = async (req, res) => {
	try {
	  const {userId} = req.params;
	  const project = await Project.find({userId});
	  res.status(200).json(project);
	} catch (err) {
	  res.status(404).json({message: err.message});
	}
 };
 
export const getSavedProjects = async (req, res) => {
	try {
	  const {userId} = req.params;
	  const project = await Project.find({'saved.userId': userId});
	  res.status(200).json(project);
	} catch (err) {
	  res.status(404).json({message: err.message});
	}
 };
 
 
 /* UPDATE */
export const saveProject = async (req, res) => {
	try {
	  const {id} = req.params;
	  const {userId} = req.body;
	  const project = await Project.findById(id);
	  const isSaved = project.saved.get(userId);
 
		if (isSaved) {
			project.saved.delete(userId);
	  	} else {
			project.saved.set(userId, true);
		}
 
	  const updatedProject = await Project.findByIdAndUpdate(
			id,
			{saved: project.saved},
			{new: true},
		);
 
	  res.status(200).json(updatedProject);
	} catch (err) {
	  res.status(404).json({message: err.message});
	}
};