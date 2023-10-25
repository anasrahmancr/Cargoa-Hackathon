import JWT_SECRET from '../util/jwtKey.js';
import jwt from 'jsonwebtoken';

const decrypt = async(token) => {
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ success: false, message: "Permission denied" });
      } else {
        req.userId = decodedToken;
      }
    });
  }
}

export default decrypt;


