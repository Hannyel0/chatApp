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







export default messagingRouter