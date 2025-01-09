import mongoose from 'mongoose'



const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Message"
    }],
    isGroup: {
        type: Boolean,
        default: false
    },
    groupPfp: {
        type: String,
        default: "server/public/no-user-profile.png"
    },
    createdAt: {
        type: Date, defaul: Date.now
    }
})

const Conversation = mongoose.model('Conversation', conversationSchema)

export default Conversation;