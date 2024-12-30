import express from "express"
import dotenv from  "dotenv"
import chalk from 'chalk'
dotenv.config()



const app = express()
const HOST = process.env.HOST
const PORT = process.env.PORT









app.listen(PORT, HOST, ()=>{
    console.log(`The server is up and running on `, chalk.green(`http://${HOST}:${PORT}`))
})