import mongoose from 'mongoose';

const connectDB = async () => {
    try {  
         mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected..");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;