import { Schema, model } from "mongoose";

const VendorSchema = new Schema({
  vendorname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},
 {timestamps: true}
);

const Vendor = model("Vendor", VendorSchema);
export default Vendor;