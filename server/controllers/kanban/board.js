//import mongoose from 'mongoose';
import Board from '../../models/kanban/board.js'
//import { throwError } from '../utils/helpers.js' //ta bort?


//Laddar boards med ett visst userId
export const getBoards = async (req, res, next) => {
    const projectId = req.projectId
    try {
        const boards = await Board.find({ forProject: projectId });
        res.status(200).json({
            message: "Success.",
            boards,
        });
    } catch (err) {
        next(err);
    }
};

//Skapar ny board
export const createNewBoard = async (req, res, next) => {
    const title = req.boardTitle;
    const projectId = req.projectId;

    try {
        if (!title) throwError("Please enter valid title.", 422);
        const board = new Board({ title, forProject: projectId});
        const result = await board.save();
        res.status(200).json({
            message: "Board created sucessfully",
            data: { id: result._id.toString(), title: result.title },
        });
    } catch (err) {
        next(err);
    }
};

/*Hämtar boards med visst id
export const getBoardById = async (req, res, next) => {
    const boardId = req.params.boardId;

    try {
        if (!boardId) throwError("Invalid board id provided.", 422);

        const data = await Board.aggregate([
            {
                $match: { _id: mongoose.Types.ObjectId(boardId) },
            },
            {
                $lookup: {
                    from: "lists",
                    let: { boardId: "$_id" },
                    pipeline: [
                        { $match: { $expr: { $eq: ["$listId", "$$listId"] } } },
                        {
                            $lookup: {
                                from: "card",
                                let: { listId: "$_id" },
                                pipeline: [
                                    { $match: { $expr: { $eq: ["$listId", "$$listId"] } } },
                                ],
                                as: "cards",
                            },
                        },
                    ],
                    as: "lists",
                },
            },
        ]);

        res.status(200).json(data);
    }   catch (err) {
        next(err);
    }
}; */

export const updateBoard = async (req, res, next) => {
    const title = req.body.title;
    const boardId = req.params.boardId;
    const projectId = req.projectId;

    try {
        if (!title) throwError("Please enter valid title.", 422);
        
        const board = await Board.findOne({ _id: boardId, forProject: projectId});
        if (!board) throwError("No boards found with that information.", 422);
        board.title = title;

        const result = await board.save();
        res.status(200).json({
            message: "Board edited succesfully",
            data: { id: result._id.toString(), title: result.title },
        });
    }   catch (err) {
        next(err);
    }
};

export const deleteBoard = async (req, res, next) => {
    const boardId = req.params.boardId;
    const projectId = req.projectId;

    try {
        const result = await Board.deleteOne({ _id: boardId, forProject: projectId });
        if (!result) throwError("No boards found with that information.", 422);
        res.status(200).json({
            message: "Board deleted succesfully",
        });
    }   catch (err) {
        next(err);
    }
};