import express from "express"
import { authenticate } from "../authentication.js"
import Message from "../models/Message.js"
import Conversation from "../models/Conversation.js"
import User from "../models/User.js"



const usersRouter = express.Router()



usersRouter.post("/addUserSearch", async (req, res)=>{

    console.log(req.body.query)

    const query = req.body.query


    const users = await User.find({name: {$regex: query, $options: "i"}})

    if(users){
        res.status(200).json({message: "Users request successful", users: users})
    }else{
        res.status(404).json({message: "User not found in the and it is not actual  "})
    }
})


usersRouter.post("/getProfileInfo", async (req, res)=>{

    console.log(req.body.userId)

    const id = req.body.userId


    const user = await User.find({_id: id})

    if(user){
        res.status(200).json({message: "Users request successful", profileData: user})
    }else{
        res.status(404).json({message: "User not found in the and it is not actual  "})
    }
})



export default usersRouter;