import express from "express"
import dotenv from  "dotenv"
import chalk from 'chalk'
dotenv.config()
import cors from 'cors'
import { connectMongo } from './dbconnection.js';
import cookieParser from 'cookie-parser';
import path from "path"
import authRouter from "./routes/authRoutes.js"
import messagingRouter from "./routes/messaging.js"


const absolutePath = path.resolve()

const app = express()
const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())
app.use('/public', express.static(path.join(absolutePath, 'public')));

connectMongo()


app.use('/auth', authRouter)
app.use("/messaging", messagingRouter)


app.listen(PORT, HOST, ()=>{
    console.log(`The server is up and running on `, chalk.green(`http://${HOST}:${PORT}`))
})