import express from "express";
import userUpload from "../controllers/userUpload.js";

const router = express.Router();

router.post("/userUpload", userUpload);

export default router;
