import express from "express";
const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET;

router.get('/getJwtSecreKey', (req, res)=>{
    console.log(process.env.JWT_SECRET,"procss ");
    res.json({jwtSecret: process.env.JWT_SECRET})
})

export default router;