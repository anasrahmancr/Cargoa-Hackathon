

const jwtSecretKey = (async(req, res)=>{
    const {JWT_SECRET} = req.body;
    console.log(JWT_SECRET);
    return JWT_SECRET;
})

export default jwtSecretKey;