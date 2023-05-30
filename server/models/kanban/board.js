import mongoose, { Schema } from 'mongoose';

const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    forProject: {
        type: Schema.Types.ObjectId,
        ref: "project",
        required: true,
    },
});


const Board = mongoose.model('Board', boardSchema); //Gör schemat till en model vilket är formen som kan utföras querys osv.
export default Board;