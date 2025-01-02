import chalk from 'chalk'
import mongoose from "mongoose"

export async function connectMongo(){

    const urlURI = "mongodb://localhost:27017/users"

    try{

        await mongoose.connect(urlURI)
        console.log("Mongodb connection successful",chalk.green(urlURI))

    }catch(err){
        console.log("Mongo Connection failed: ", err)
    }
}


