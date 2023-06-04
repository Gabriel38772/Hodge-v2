//import mongoose from 'mongoose';
import Column from '../../models/kanban/column.js'
//import { throwError } from '../utils/helpers.js' //ta bort?


//Laddar boards med ett visst userId
export const getColumns = async (req, res, next) => {
    const projectId = req.projectId
    try {
        const columns = await Column.find({ forProject: projectId });
        res.status(200).json({
            message: "Success.",
            columns,
        });
    } catch (err) {
        next(err);
    }
};

//Skapar ny kolumn
export const createNewColumns = async (req, res, next) => {
    const title = req.columnsTitle;
    const projectId = req.projectId;

    try {
        if (!title) throwError("Please enter valid title.", 422);
        const column = new column({ title, forProject: projectId});
        const result = await column.save();
        res.status(200).json({
            message: "Column created sucessfully",
            data: { id: result._id.toString(), title: result.title },
        });
    } catch (err) {
        next(err);
    }
};


export const updateColumn = async (req, res, next) => {
    const title = req.body.title;
    const columnId = req.params.columnId;
    const projectId = req.projectId;

    try {
        if (!title) throwError("Please enter valid title.", 422);
        
        const column = await Column.findOne({ _id: boardId, forProject: projectId});
        if (!column) throwError("No column found with that information.", 422);
        column.title = title;

        const result = await column.save();
        res.status(200).json({
            message: "Column edited succesfully",
            data: { id: result._id.toString(), title: result.title },
        });
    }   catch (err) {
        next(err);
    }
};

export const deleteColumn = async (req, res, next) => {
    const columnId = req.params.columnId;
    const projectId = req.projectId;

    try {
        const result = await Column.deleteOne({ _id: columnId, forProject: projectId });
        if (!result) throwError("No columns found with that information.", 422);
        res.status(200).json({
            message: "Column deleted succesfully",
        });
    }   catch (err) {
        next(err);
    }
};