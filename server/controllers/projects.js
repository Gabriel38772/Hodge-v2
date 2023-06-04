import Project from '../models/project.js';


export const createProject = async (req, res) => {
  //console.log(req.body);
  try {
    const project = new Project(req.body);
    await project.save();

    const projects = await Project.find();
    res.status(201).json(projects);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }

};

export const getProject = async (req, res) => {
  try {
    const {projectId} = req.params;
    const project = await Project.findById(projectId);
    res.status(200).json(project);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};
// let result = await projects.save();



/*Skapar projekt i mongoose 
export const createProject = async(req, res) => {
	console.log(req.body)
  const user = await User.findById();
	const projectOwnerId = req.body.userId;
	const newProject = new Project({
		title,
		info,
		category,
		picturePath,
		members: []
	});
	await newProject.save();
		

		
		//const {title, info, category, picturePath,} = req.body;
		//const user = await User.findById(userId);
		/*
		const newProject = new Project(req.body)
		await newProject.save(); //Sparar projektet
		const newProject = new Project({
			projectOwnerId: user.userId,
			title,
			info,
			category,
			picturePath,
			members: []
		});*/

		/*
		projects.save(err=>{
			if(err){
				res.send(err)
			}else{
				res.send({message:"succesful"})
			}
		})
			

   	

		const project = await Project.find(); //Hämtar alla projects till front end för att flödet ska uppdateras
		res.status(201).json(project);

  	} catch (err) {
   	res.status(409).json({message: err.message});
	}
};*/











/* READ 
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
 
 
 /* UPDATE 
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
	}*/
