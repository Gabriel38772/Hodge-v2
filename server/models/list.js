import mongoose, { Schema } from 'mongoose';

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    boardId: {
        type: Schema.Types.ObjectId,
        ref: "board",
        required: true,
    },
});


const List = mongoose.model('List', listSchema); //Gör schemat till en model vilket är formen som kan utföras querys osv.
export default list;