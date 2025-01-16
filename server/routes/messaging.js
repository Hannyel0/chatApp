import express from "express"
import { authenticate } from "../authentication.js"
import Message from "../models/Message.js"
import Conversation from "../models/Conversation.js"
import User from "../models/User.js"

const messagingRouter = express.Router()

// messagingRouter.post('/converstions',authenticate, (req, res)=>{

//     const {otherUserId, participants, groupPfp } = req.body;


//     const isGroup = participants && participants.length > 2;
//     const converstionParticipants = isGroup ? participants : [req.user.userId, otherUserId]
// } )




messagingRouter.get("/users/search", async (req, res)=>{

    const {query} = req.query


    const users = await User.find({name: {$regex: query, $options: "i"}})

    if(user){
        res.status(200).json({message: "Users request successful", users: users})
    }else{
        res.status(404).json({message: "User not found"})
    }
})



export default messagingRouter