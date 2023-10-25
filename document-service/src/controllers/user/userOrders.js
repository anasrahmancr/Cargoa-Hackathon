import FormEntry from "../../model/FormEntry.js";
import jwt from 'jsonwebtoken';

const getOrders = async(req, res) => {
    try{
        console.log("inside userORders");   
        const token = req.header('Authorization').split('Bearer ')[1];
        console.log(token,"token");
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const { userId, email } = decodedToken;
        console.log("userId",userId);
        const userOrder = await FormEntry.find({userId: userId});
        console.log(userOrder);
        if(userOrder){
            res.status(200).json({success: true, userOrders: userOrder})
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

export {getOrders, viewData};