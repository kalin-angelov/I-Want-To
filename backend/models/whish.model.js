import mongoose from 'mongoose';

const whishSchema = new mongoose.Schema({
    whish: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Whish = mongoose.model("Whish", whishSchema);
export default Whish;