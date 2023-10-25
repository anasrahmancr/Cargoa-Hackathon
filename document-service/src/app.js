import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRouter from './routes/userRouter.js';
import vendorRouter from './routes/vendorRouter.js';
import connectDB from './config/config.js';
import cors from 'cors';


const app = express();

// Configure Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Define routes
app.use('/api/user', userRouter);
app.use('/api/vendor', vendorRouter);

dotenv.config(); 
// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))