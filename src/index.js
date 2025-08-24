// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";

// import mongoose from "mongoose";
// import {DB_NAME} from "./constant";
import connectDB from "./db/index.js";





dotenv.config({
    path: './env'
})




connectDB()
.than(()=>{
app.listen(process.env.POET||8000 , ()=>{
    console.log(`server is runing at port${process.env.PORT}`)
})
})
.catch((error)=>{
    console.log("mongo db connection failed ", error)
})


/*
import express from "express";
const app = express();
(async () =>{

    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)
        app.on("error" ,(error) =>{
            console.log("error", error)
            throw error
        })

        app.listen(process.env.PORT,() => {
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("error : ",error)
        throw error        
    }
})()


*/