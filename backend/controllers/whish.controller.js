import Whish from '../models/whish.model.js';

import { createWhishManager, updateWhishManager, deleteWhishManager } from '../manager/whish.manager.js';

export const getWhishes = async (req, res) => {
    try {
        const whishes = await Whish.find({});
        res.status(200).json({ status: 200, success: true, data: whishes});
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ status: 500, success: false ,message: error.message });
    }
};

export const createWhish = async(req, res) => {

    const whish = req.body

    try {
        const newWhish = await createWhishManager(whish);
        res.status(newWhish.status).json({ status: newWhish.status, success: true, data: newWhish });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(error.status).json({ status: error.status, success: false, message: error.message});
    }
};

export const updateWhish = async(req, res) => {

    const { id } = req.params;
    const whish = req.body;

    try {
        const updatedWhish = await updateWhishManager(id, whish);
        res.status(updatedWhish.status).json({ status: updateWhish.status, success: true, data: updatedWhish.data});
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(error.status).json({ status: error.status, success: false, message: error.message });
    }
};

export const deleteWhish = async (req,res) => {
    
    const { id } = req.params;

    try {
        const deletedWhish = await deleteWhishManager(id);
        res.status(deletedWhish.status).json({ status: deleteWhish.status, success: true, message: deletedWhish.message });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(error.status).json({ status: error.status, success: false, message: error.message });
    }
};
