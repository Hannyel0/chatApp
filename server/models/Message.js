import mongoose from "mongoose"


const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Message = mongoose.model("Message", messageSchema)

export default Message;