import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import vehicleRoutes from './routers/vehicle.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', vehicleRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});