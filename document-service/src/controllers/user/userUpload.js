import FormEntry from "../../model/FormEntry.js";
import jwt from 'jsonwebtoken';

const userUpload = async(req, res) => {
  try {
    const {productName, quantity, dateOfShipping, vendorId, purchaseOrders } = req.body;
    console.log(req.body, "check req.bodyYYYYYY");
    
    if(!vendorId || !productName || !quantity || !dateOfShipping || !purchaseOrders){
      return res.status(400).json({message: "Fill all the fields"});
    }
    
    const token = req.header('Authorization').split('Bearer ')[1];
    console.log(token,"token");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, email } = decodedToken;
    // const userId = decrypt(token);
    console.log(userId, email,"userId enayj");
    // const userId = await decrypt(token, process.env.JWT_SECRET);
  
    // Store the data in a MongoDB database
    const formEntry = new FormEntry({
      userId: userId,
      vendorId: vendorId, 
      productName: productName,
      quantity: quantity,
      dateOfShipping: dateOfShipping,
      documentUrl: purchaseOrders,

    });

    formEntry.save();
    res.status(200).json({success: true})

  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

const selectSchedule = async(req, res) => {
  console.log(req.body, "selected schedule");
  try{
    const {selectSchedule} = req.body;
    const formId = req.params.id;
    if(!selectedSchedule){
      res.status(404).json({success: false, message: "Select a Schedule"});
    }
    await FormEntry.findOneAndUpdate({_id: formId},
      {$set: {
        selectedSchedule: selectSchedule
      }})
      res.status(200).json({success: true})
  } catch(error) {
    console.error(error);
    res.status(500).json({success: false, message: "Internal Server Error"});
  }
}

export default userUpload;
