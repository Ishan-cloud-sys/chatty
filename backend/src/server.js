// const express=require('express');
//IMPORTING 
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messagesRoutes from './routes/messages.route.js';
import path from 'path';
import connectDB from './lib/db.js';
//USING
dotenv.config();
const app=express();   
const __dirname=path.resolve();
//UTILIZING
const PORT=process.env.PORT;
app.use(express.json());//middleware to parse json data,i.e. request.body
app.use('/api/auth',authRoutes);
app.use('/api/messages',messagesRoutes);
//make ready  for deployment
if(process.env.NODE_ENV=="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
}
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
});
app.listen(PORT,()=>{
    console.log("Server is running on the port:"+PORT)
    connectDB()
});
