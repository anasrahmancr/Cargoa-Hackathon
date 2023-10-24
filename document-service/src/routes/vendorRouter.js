import express from 'express';
import vendorUpload from '../controllers/vendorUpload.js';

const router = express.Router();

router.post('/vendorUpload', vendorUpload);

export default router;