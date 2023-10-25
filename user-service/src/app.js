import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import serviceRouter from './routes/service.js';
import authRouter from './routes/auth.js';
import connectDB from './config/config.js';
import cors from 'cors';

const app = express();

// Configure Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Define routes
app.use('/api/service', serviceRouter);
app.use('/api/auth', authRouter);

dotenv.config(); 
// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))