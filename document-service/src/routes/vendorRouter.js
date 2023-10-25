import express from 'express';
import vendorUpload from '../controllers/vendor/vendorUpload.js';
import {reviewOrder} from '../controllers/vendor/vendorOrders.js';

const router = express.Router();

router.post('/vendorUpload/:orderId', vendorUpload);
router.get('/reviewOrder', reviewOrder);
// router.post('/setShippingDates', setShippingDates)

export default router;