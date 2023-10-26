import FormEntry from "../../model/FormEntry.js";
import jwt from 'jsonwebtoken';

const userUpload = async(req, res) => {
  try {
    const {productName, quantity, dateOfShipping, vendorId, purchaseOrders, pdfUrl } = req.body;
    console.log(req.body, "check req.bodyYYYYYY");
    
    if(!vendorId || !productName || !quantity || !dateOfShipping || !purchaseOrders || !pdfUrl){
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
      pdfUrl : pdfUrl
    });

    formEntry.save();
    res.status(200).json({success: true})

  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

const selectSchedule = async(req, res) => {
  console.log(req.body, "selected schedule");
  const orderId = req.params.orderId;
  try{
    const {selectedOption} = req.body;
    if(!selectedOption){
      res.status(404).json({success: false, message: "Select a Schedule"});
    }

    const existingForm = await FormEntry.findOne({ _id: orderId });
    if (!existingForm) {
      return res.status(404).json({ success: false, message: "Document not found" });
    }
    const selectedDate = existingForm.vendorOptions[0]
    console.log("selectedDate =",selectedDate)
    console.log("selectedOption =",selectedOption)

    console.log("selectedDate.selectedOption =",selectedDate[selectedOption])
    existingForm.selectedSchedule = selectedDate[selectedOption];

    const updatedForm = await existingForm.save();
  
    console.log(updatedForm);
      res.status(200).json({success: true})
  } catch(error) {
    console.error(error);
    res.status(500).json({success: false, message: "Internal Server Error"});
  }
}

export  {userUpload, selectSchedule};
