import jwt from 'jsonwebtoken'
import dotenv from  "dotenv"
dotenv.config()


export const authenticate = async (req, res, next)=>{

    const token = req.cookies.authToken

    if(!token){
        return res.status(401).json({ message: "No token provided" });
    }

    try{

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = { userId: decoded.userId, email: decoded.email };
        next()

    }catch(err){

        console.log("Something went wrong authenticating the Token")
    }


}