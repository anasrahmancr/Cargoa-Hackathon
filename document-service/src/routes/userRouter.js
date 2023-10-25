import express from "express";
import userUpload from "../controllers/userUpload.js";
import jwtSecretKey from "../util/jwtKey.js";

const router = express.Router();

router.post("/userUpload", userUpload);

router.get('/getJwtSecreKey', jwtSecretKey)

export default router;
