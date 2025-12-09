const jwt = require('jasonwebtoken') ;


const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization']

    if(!authHeader) {
        return res.status(401).json({
            message: "Auth header missing or malformed"
        })
    }

    try{
   
     const decode = jwt.verfy(authHeader, "Hellothisisasecret")

     req.user = decoded 

     next()
    }
    catch(err){
        return res.status(400).json({
            message: "Invalid or expired token"
        })
    }
}

module.exports