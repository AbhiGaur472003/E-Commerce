// const jwt = require("jsonwebtoken");
// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.token;
//     if (authHeader) {
//         const token = authHeader.split(" ")[1];
//          jwt.verify(token, process.env.JWT_SEC, (err, userData) => {
//             if(err)res.status(403).json("Token is not valid.");
//             req.user=userData;
//             next();
//         })
//     }else {
//        return res.status(401).json("You are not authenticated!");
//   }
// };
// const verifyTokenAndAuthorization=(req,res,next)=>{
//     verifyToken(req,res,()=>{
//         console.log(req.user.id);
//         if(req.user.id === req.params.id || req.user.isAdmin){
//             next();
//         }else{
//             res.status(403).json("You are not allowed to do this.");
//         }
//     });
// };
// const verifyTokenAndAdmin=(req,res,next)=>{
    
//     verifyToken(req,res,()=>{
//        // console.log(req.user.id);
//         if(req.user.id === req.params.id){
//             next();
//         }else{
//             res.status(403).json("You are not allowed to do this. And i dont know the reason .");
//         }
//     });
// };
// module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};


const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.token;

  if (!authHeader) {
    console.log(req.headers);
    return res.status(401).json({ error: "You are not authenticated!!!!" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = jwt.verify(token, process.env.JWT_SEC);
    req.user = user;
    next();
  } catch (err) {
    console.log(token);
    return res.status(403).json({ error: "Token is not valid!" });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ error: "You are not allowed to do that!" });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin ) {
      next();
    } else {
      return res.status(403).json({ error: "You are not allowed to do that!!" });
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};