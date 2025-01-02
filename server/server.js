import express from "express"
import dotenv from  "dotenv"
import chalk from 'chalk'
dotenv.config()
import cors from 'cors'
import validator from 'validator'
import { connectMongo } from './dbconnection.js';
import User from './models/User.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt'
import { authenticate } from "./authentication.js"

const app = express()
const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())

connectMongo()




app.post('/signup', async(req, res)=>{

    const {username, email, password, confirmPassword} = req.body

    if(!validator.isEmail(email)){
        return res.status(400).json({message: "Email is not valid"})
    }

    if(password !== confirmPassword){
        return res.status(400).json({message: "Passwords do not match"})
    }

    if(password.length < 4 && confirmPassword.length < 4){
        return res.status(400).json({message: "Password needs to be longer than 4 characters"})
    }


    try{

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message: "This email is already in use"})
        }

        const newUser = new User({
            name: username, email, password
        })

        await newUser.save();


        res.status(201).json({message: "User successfully created", userId: newUser._id})

    }catch(err){
        return res.status(500).json({message: "Error while creating the user", error: err})
    }
})








app.post('/login', async(req, res)=>{

    const {email, password} = req.body

    try{

        const existingUser = await User.findOne({email})

        if(!existingUser){
            return res.status(400).json({message: "No user found with these credentials"})
        }

        const isMatch = await bcrypt.compare(password, existingUser.password)
        
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"})
        }

        const token = jwt.sign({userId: existingUser._id, email: existingUser.email}, process.env.SECRET_KEY, {expiresIn: "1h"})
        
        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 3600000
        })

        res.status(200).json({message: "Login successful"})

    }catch(err){
        return res.status(500).json({message: "Error while Logging in ", error: err})
    }
})









app.get('/profile', async(req, res)=>{

})




app.listen(PORT, HOST, ()=>{
    console.log(`The server is up and running on `, chalk.green(`http://${HOST}:${PORT}`))
})