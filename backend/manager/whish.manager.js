import mongoose from 'mongoose';

import Whish from '../models/whish.model.js';

export const createWhishManager = async ( whish ) => {

    if(!whish.whish) {
        throw { message: "Please provide a whish", status: 400 };
    }

    try {
        const newWhish = await Whish.create(whish);
        return { data: newWhish, status: 201 };
    } catch(error) {
        throw { message: error.message, status: 500 };
    }
};

export const updateWhishManager = async (id, whish) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw { message: "Invalid whish id", status: 400 };
    }
    
    try {
        const updatedWhish = await Whish.findByIdAndUpdate(id, whish, { new: true });
        return { data: updatedWhish, status: 201 }
    } catch (error) {
        throw { message: error.message, status: 500 };
    }
};

export const deleteWhishManager = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw {message: "Invalid whish id", status: 400 };
    }

    try {
        await Whish.findByIdAndDelete(id);
        return { message: "Whish deleted successfully", status: 200 }
    } catch (error) {
        throw { message: error.message, status: 500 }
    }
}