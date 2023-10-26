import { Schema, model } from "mongoose";

const formEntrySchema = new Schema({
    // userName : {type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User'},
    // vendorName : {type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Vendor'},
    userId: {type: String, required: true},
    vendorId: {type: String, required: true},
    productName: {type: String, required: true},
    quantity : {type: Number, required: true},
    dateOfShipping : {type: Date, required: true}, 
    vendorOptions: [{
        schedule1: {type: Date},
        schedule2: {type: Date},
        schedule3: {type: Date}
      }],
      
    selectedSchedule : {type: Date},
    documentUrl : {type: String, required: true},
    pdfUrl: {type: String, required: true}
})

const FormEntry = model("FormEntry", formEntrySchema);

export default FormEntry;