import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    profilePicture: {
        type: String,
        default: "/no-user-profile.png"
    },
    bio: {
        type: String,
        maxlength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10); // Salt rounds set to 10
    }
    next();
});

const User = mongoose.model('User', userSchema);

export default User;