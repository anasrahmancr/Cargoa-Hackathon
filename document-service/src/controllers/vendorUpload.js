import FormEntry from "../model/FormEntry.js";

const vendorUpload = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const formId = req.params.id;
    if (!vendorOptions || vendorOptions.length < 3) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all Schedules" });
    }

    await FormEntry.findOneAndUpdate(
      { _id: formId },
      {
        $set: {
          "vendorOptions.schedule1": newDate1,
          "vendorOptions.schedule2": newDate2,
          "vendorOptions.schedule3": newDate3,
        },
      },
      { new: true }
    );
    res.status(200).json({ success: true });

    if (!form) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default vendorUpload;
