import mongoose, { Schema } from 'mongoose';


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String
    },
    projectId: {
        type: String,
        required: false
    },
    columnId: {
        type: String,
        required: false
    }
});


const Task = mongoose.model('Task', taskSchema); //Gör schemat till en model vilket är formen som kan utföras querys osv.
export default Task;