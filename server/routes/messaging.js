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




messagingRouter.post("/userSearch", async (req, res)=>{

    console.log(req.body.query)

    const query = req.body.query


    const users = await User.find({name: {$regex: query, $options: "i"}})

    if(users){
        res.status(200).json({message: "Users request successful", users: users})
    }else{
        res.status(404).json({message: "User not found in the and it is not actual  "})
    }
})



export default messagingRouter