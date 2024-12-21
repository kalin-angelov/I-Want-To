import Vehicle from '../models/vehicle.model.js';

export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({});
        res.status(200).json({ success: true, data: vehicles });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false ,message: error.message });
    }
};

export const createVehicle = async (req, res) => {
    
    const vehicle = req.body;

    if (!vehicle.type || !vehicle.brand || !vehicle.model) {
        return res.status(400).json({ success: false, message: "Please provide type, brand and model" });
    }

    try {
        const newVehicle = await Vehicle.create(vehicle);
        res.status(201).json({ success: true, data: newVehicle });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateVehicle = async (req, res) => {
    
    const { id } = req.params;
    const vehicle = req.body;

    if (!mongoose.types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid vehicle id" });
    }

    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(id, vehicle, { new: true });
        res.status(200).json({ success: true, data: updatedVehicle });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteVehicle = async (req, res) => {

    const { id } = req.params;

    try {
        await Vehicle.findByIdAndRemove(id);
        res.status(200).json({ success: true, message: "Vehicle deleted successfully" });
    } catch (error) {
        console.log(`Error message: ${error.message}`);
        res.status(500).json({ success: false, message: error.message });
    }
};