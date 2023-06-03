import Task from '../../models/kanban/task.js';


export const createTask = async (req, res) => {
  //console.log(req.body);
  try {
    const task = new Task(req.body);
    await task.save();

    const tasks = await Task.find();
    res.status(201).json(tasks);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }

};

/*
export const getTask = async (req, res) => {
  try {
    const {projectId} = req.params;
    const project = await Project.findById(projectId);
    res.status(200).json(project);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

*/