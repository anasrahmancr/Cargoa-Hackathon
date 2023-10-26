import express from 'express';
const router = express.Router();
import  getUsers  from "../controllers/userController.js";

router.get('/getUser/:userId',getUsers)

export default router;