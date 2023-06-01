import mongoose from 'mongoose';

const columnSchema = new mongoose.Schema({
    title: {
        type: String
    },
    forProject: {
        type: String,
        
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        taskIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "In progress",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],

    createdAt: {
        type: Date,
        default: Date.now(),
      },
    createdBy: {
      type:  String
    },
},
      {timestamps: true},
);


const Column = mongoose.model('Column', columnSchema); //Gör schemat till en model vilket är formen som kan utföras querys osv.
export default Column;