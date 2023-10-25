import express from 'express';
const router = express.Router();
import { getVendors } from '../controllers/vendorController.js';

router.get('/getVendors', getVendors);

// router.post('/invitationResponse', invitationResponse);

export default router;