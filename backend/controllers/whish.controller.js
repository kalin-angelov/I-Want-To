import mongoose from 'mongoose';
import Whish from '../models/whish.model.js';

export const getWhishes = async (req, res) => {
    try {
        const whishes = await Whish.find({});
        res.status(200).json({ success: true, data: whishes});
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false ,message: error.message });
    }
};

export const createWhish = async(req, res) => {

    const whish = req.body

    if(!whish.whish) {
        return res.status(400).json({ success: false, message: "Please provide a whish"});
    }

    try {
        const newWhish = await Whish.create(whish);
        res.status(201).json({ success: true, data: newWhish });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false, message: error.message});
    }
};

export const updateWhish = async(req, res) => {

    const { id } = req.params;
    const whish = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid whish id" });
    }

    try {
        const updatedWhish = await Whish.findByIdAndUpdate(id, whish, { new: true });
        res.status(200).json({ success: true, data: updatedWhish});
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteWhish = async (req,res) => {
    
    const { id } = req.params;

    try {
        await Whish.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Whish deleted successfully" });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }
};
