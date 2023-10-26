import express from 'express';
const router = express.Router();
import { getVendors, getVendor } from '../controllers/vendorController.js';

router.get('/getVendors', getVendors);
router.get('/getVendor/:vendorId', getVendor);


// router.post('/invitationResponse', invitationResponse);

export default router;