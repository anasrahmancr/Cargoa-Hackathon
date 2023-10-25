import Vendor from "../models/Vendor.js";

const getVendors = async(req, res) => {
    console.log("hiiiiiiiiiii");
    const vendor = await Vendor.find();
    console.log(vendor,"vendorssssss");
    if(!vendor){
        return res.status(404).json({success:false, message: "Vendors not available"});
    }
    res.status(200).json({vendors: vendor, success: true})
}

// const invitationResponse = (req, res) => {
//     try{
        
//     }
// }

export {getVendors} ;