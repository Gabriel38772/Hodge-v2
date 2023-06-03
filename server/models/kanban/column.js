import mongoose from 'mongoose';

const columnSchema = new mongoose.Schema({
    title: {
        type: String
    },
    forProject: {
        type: String,
        
    },
    column1: {
        id: "column-1",
        title: "To do",
        taskIds: [],
    },
    column2: {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    column3: {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
    createdBy: {
      type:  String
    },
},
      {timestamps: true},
);


const Column = mongoose.model('Column', columnSchema); //Gör schemat till en model vilket är formen som kan utföras querys osv.
export default Column;