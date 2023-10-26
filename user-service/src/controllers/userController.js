import User from "../models/User.js";

const getUsers = async(req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const user = await User.findOne({_id: userId});
    console.log(user,"users");
    if(!user){
        return res.status(404).json({success:false, message: "Users not available"});
    }
    res.status(200).json({user: user, success: true})
}

export default getUsers ;