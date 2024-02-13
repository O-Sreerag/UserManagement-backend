// services/mongoose.ts
import mongoose from 'mongoose';

// const MONGODB_URI = "mongodb://127.0.0.1:27017/secondBadge";
const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/secondBadge";

const database = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('db connected successfully');
    } catch (error) {
        console.log(error);
    }  
}

export default database;