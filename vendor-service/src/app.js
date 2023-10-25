import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import vendorRouter from "./routes/vendor.js";
import authRouter from "./routes/auth.js";
import connectDB from "./config/config.js";
import cors from "cors";

const app = express();
app.use(cors());
// Configure Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api/vendor", vendorRouter);
app.use("/api/auth", authRouter);

dotenv.config();
// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
