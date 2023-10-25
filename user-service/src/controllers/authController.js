import winston from '../util/logger.js';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import hashing from '../util/hashing.js';
import bcrypt from 'bcrypt';

const login = async(req, res) => {
    console.log(req.body);
    winston.info(`req.bodyyyy', ${req.body}`)
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email}) ;
        if(!user){
            return res.status(401).json({success: false, message: 'Please Login using Registered Email'})
        } 
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({success: false, message: 'Incorrect Password'});
        } 
        // Generate JWT Token
        const key = process.env.JWT_SECRET;
        console.log(key);
       
        const token = jwt.sign({userId: user._id, email: user.email}, key , {expiresIn: '24h'});
        console.log(token);
        if (token) {
            jwt.verify(token, key, (err, decodedToken) => {
              if (err) {
                console.log("inside if decrypt");
                res.status(401).json({ success: false, message: "Permission denied" });
              } else {
                console.log("else in decrypt");
                const userId = decodedToken;
                console.log(userId,"useriddddd")
                // return decodedToken;
              }
            });
          }
        
        res.status(200).json({userToken: token, success: true});

    } catch (error) {
        console.error(error.message)
        res.status(500).json({success: false, message: 'Internal Server Error'})
    }

}

      // Register User 

const register = async(req, res) => {
    winston.warn(`${req.body}`);
    try{
        const {username, email, password} = req.body;
        if(!username || ! email || !password){
            return res.status(400).json({message: "Fill all the fields"});
        }
        const user = await User.findOne({email : email});
        if(user) {
           return res.status(409).json({message: "User Already Registered"});
        } 

        // hashing the password
        const hashedPassword = await hashing(password);
        
        const newUser = new User({
          username: username,
          email: email,
          password: hashedPassword,
        });
        await newUser.save();
        return res.status(201).json({ success: true, message: 'Successfully registered.' });
    } catch(error) {
        winston.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export {login, register};