import Vendor from "../models/Vendor.js";

const getVendors = async(req, res) => {
    const vendor = await Vendor.find();
    console.log(vendor,"vendorssssss");
    if(!vendor){
        return res.status(404).json({success:false, message: "Vendors not available"});
    }
    res.status(200).json({vendors: vendor, success: true})
}

const getVendor = async(req, res) => {
    const vendorId = req.params.vendorId;
    console.log(vendorId);
    const vendor = await Vendor.findOne({_id: vendorId});
    console.log(vendor,"vendor");
    if(!vendor){
        return res.status(404).json({success:false, message: "vendor not available"});
    }
    res.status(200).json({vendor: vendor, success: true})
}

// const invitationResponse = (req, res) => {
//     try{
        
//     }
// }

export {getVendors, getVendor} ;