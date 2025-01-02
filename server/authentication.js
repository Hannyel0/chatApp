import jwt from 'jsonwebtoken'
import dotenv from  "dotenv"
dotenv.config()


export const authenticate = async (req, res, next)=>{

    const token = req.cookies.authToken

    if(!token){
        return res.status(401).json({ message: "No token provided" });
    }

    try{

        const decoded = await jwt.verify(token, process.env.SECRET_KEY)

        req.userId = decoded.userId
        next()

    }catch(err){

        console.log("Something went wrong authenticating the Token")
    }


}