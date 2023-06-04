import Card from '../../models/kanban/card.js';
import List from '../../models/kanban/list.js';

//const { throwError } = require("../utils/helpers"); //ta bort? 

export const createNewList = async (req, res, next) => {
    const boardId = req.body.boardId;
    const title = req.body.title;

    try {
        if (!boardId || !title) throwError("Title or BoardId is invalid", 422);

        const list = new List({ title, boardId });
        const result = await list.save();
        res.status(200).json({
            message: "Success",
            data: { id: result._id.toString(), title: result.title },
        });
    }   catch (err) {
        next(err);
    }
};

export const updateList = async (req, res, next) => {
    const listId = req.body.listId;
    const title = req.body.title; 

    try {
        if (!listId || !title) throwError("Title or ListId is invalid", 422);

        const list = await list.findById(listId);
        list.title = title;
        const result = await list.save();
        res.status(200).json({
            message: "Success",
            data: { id: result._id.toString(), title: result.title }
        });
    }   catch (err) {
        next(err);
    }
};

export const deleteList = async (req, res, next) => {
    const listId = req.params.listId;

    try {
        if (!listId) throwError("ListId is invalid", 422);

        await Card.deleteMany({ listId });
        await List.deleteOne({ _id: listId });
        res.status(200).json({
            message: "List deleted successfully.",
        });
    }   catch (err) {
        next(err);
    }
};