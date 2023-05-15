import mongoose, { Schema } from 'mongoose';

const checkListSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: true
    },
});

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    checkList: [checkListSchema],
    boardId: {
        type: Schema.Types.ObjectId,
        ref: "board",
        required: true
    },
    listId: {
        type: Schema.Types.ObjectId,
        ref: "list",
        required: true
    }
});


const Card = mongoose.model('Card', cardSchema); //Gör schemat till en model vilket är formen som kan utföras querys osv.
export default card;