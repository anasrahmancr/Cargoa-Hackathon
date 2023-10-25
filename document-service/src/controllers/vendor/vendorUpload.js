import FormEntry from "../../model/FormEntry.js";


const vendorUpload = async (req, res) => {
console.log("check", req.body, req.params.orderId);
const orderId = req.params.orderId;
const {date1, date2, date3} = req.body;
  // const token = req.header('Authorization').split('Bearer ')[1];
  // console.log(token,"token");
  // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  // const { vendorId, email } = decodedToken;
  try {
    // Fetch the existing document by its unique identifier, e.g., _id
    const existingForm = await FormEntry.findOne({ _id: orderId });
  
    if (!existingForm) {
      return res.status(404).json({ success: false, message: "Document not found" });
    }
  
    // Update the vendorOptions array
    existingForm.vendorOptions = [
      {
        schedule1: date1,
        schedule2: date2,
        schedule3: date3,
      },
    ];
  
    // Save the updated document
    const updatedForm = await existingForm.save();
  
    console.log(updatedForm);
    res.status(200).json({ success: true, updatedForm: updatedForm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
  
  
};

export default vendorUpload;
