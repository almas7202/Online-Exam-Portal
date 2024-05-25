import 'dotenv/config'
import { application } from "express";
import mongoose from 'mongoose';
import app from "./app/app";


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Application Runnin On ${PORT}`);
})

mongoose.connect('mongodb://localhost:27017/MCQExamPortal')
    .then(()=>console.log('Succesfully Connnected To Mongoose'))
    .catch((err) => console.log(err))