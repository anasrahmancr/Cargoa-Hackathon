import FormEntry from "../../model/FormEntry.js";
import jwt from 'jsonwebtoken';

const reviewOrder = async(req, res) => {
    try{
        const token = req.header('Authorization').split('Bearer ')[1];
        console.log(token,"token");
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const { vendorId, email } = decodedToken;
        console.log("vednorIsd",vendorId);
        const orders = await FormEntry.find({vendorId: vendorId});
        console.log(orders);
        if(orders){
            res.status(200).json({success: true, orders: orders})
        } else{
            res.status().json({success: false, message: 'No Orders'});
        }
    } catch(error) {
        res.status(500).json({success:false, message: "Internal server error"})

    }
}

const viewData = async(req, res) => {
    try{
        const orderId = req.params.orderId;
        const data = await FormEntry.findOne({_id: orderId});
        if(data){
            res.status(200).json({success: true, order: data})
        } else{
            res.status(404).json({success:false, message: "Not Found"})
        }
    } catch(error){
        res.status(500).json({success:false, message: "Internal server error"})

    }
}

export {reviewOrder, viewData};