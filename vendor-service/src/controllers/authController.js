import jwt from 'jsonwebtoken';
import Vendor from '../models/Vendor.js';
import hashing from '../util/hashing.js';
import bcrypt from 'bcrypt';

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
       
        const vendor = await Vendor.findOne({email: email}) ;
        if(!vendor){
            return res.status(401).json({success: false, message: 'Please Login using Registered Email'})
        } 
        const isPasswordValid = await bcrypt.compare(password, vendor.password);

        if(!isPasswordValid){
            return res.status(401).json({success: false, message: 'Incorrect Password'});
        } 
        // Generate JWT Token
        const key = process.env.JWT_SECRET
        const token = jwt.sign({vendorId : vendor._id, email: vendor.email}, key , {expiresIn: '24h'});
        console.log(token, "vendor token ");
        res.status(200).json({vendorToken: token, success: true});

    } catch (error) {
        console.error(error.message)
        res.status(500).json({success: false, message: 'Internal Server Error'})
    }

}

      // Register User 

const register = async(req, res) => {
    console.log("hiiiii");
    console.log(req.body);
    
    try{
        const {username, email, password} = req.body;
        if(!username || ! email || !password){
            return res.status(400).json({success: false, message: "Fill all the fields"});
        }
        const vendor = await Vendor.findOne({email : email});
        if(vendor) {
           return res.status(409).json({success: false, message: "Vendor Already Registered"});
        } 

        // hashing the password
        const hashedPassword = await hashing(password);
        
        const newVendor = new Vendor({
          vendorname: username,
          email: email,
          password: hashedPassword,
        });
        await newVendor.save();
        return res.status(201).json({ success: true, message: 'Successfully registered.' });
    } catch(error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

export {login, register};