import jwt from 'jsonwebtoken';

const decrypt = (token, key) => {
  console.log(key,"keyyy --------- toekk emmm",token);

  if (token) {
    jwt.verify(token, key, (err, decodedToken) => {
      if (err) {
        console.log("inside if decrypt");
        res.status(401).json({ success: false, message: "Permission denied" });
      } else {
        console.log("else in decrypt");
        req.userId = decodedToken;
        return decodedToken;
      }
    });
  }
}

export default decrypt;


