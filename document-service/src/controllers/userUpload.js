import FormEntry from "../model/FormEntry.js";

const userUpload = (req, res) => {
  try {
    const { userName, vendorName, productName, quantity, dateOfShipping, documentUrl } = req.body;
    console.log(req.body, "check req.bodyYYYYYY");

    if(!vendorName || !productName || !quantity || !dateOfShipping || !documentUrl){
        return res.status(400).json({message: "Fill all the fields"});
    }
    
    // Store the data in a MongoDB database
    const formEntry = new FormEntry({
      // userName: userName,
      vendorName: vendorName, 
      productName: productName,
      quantity: quantity,
      dateOfShipping: dateOfShipping,
      documentUrl: documentUrl,

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
