import express from "express";
import userUpload from '../controllers/user/userUpload.js'
import {getOrders, viewData} from '../controllers/user/userOrders.js';
const router = express.Router();

router.post("/userUpload", userUpload);
router.get('/getOrders', getOrders);
router.get('/viewData/:orderId', viewData);

export default router;
