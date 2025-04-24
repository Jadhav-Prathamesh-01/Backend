import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
    })
    // Use backticks (``) for template literals
    await mongoose.connect(`${process.env.MONGODB_URI}/goal-shop`);
};

export default connectDB;
