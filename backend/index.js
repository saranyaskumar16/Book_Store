import express, { request, response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoutes.js'
import cors from 'cors'

const app = express();

app.use(express.json());

// cors middlewear method1
// app.use(cors());

// cors middlewear method1
// app.use(
//    cors({
//       origin: 'https://localhost:3000',
//       methods:['GET','POST','PUT','DELETE'],
//       allowedHeaders:['Cpntent-Type'],
//    })
// );

app.get('/',(request,response)=>{
     console.log(request);
     return response.status(234).send("Welcome to Book Store app")
     
});

app.use('/books', booksRoute);

// post man updating and deleting without correct id is an error

mongoose
.connect(mongoDBURL)
.then(()=>{
   console.log('App connected to database');
   app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`);
    
});
   
})
.catch((error)=>{
   console.log(error);
   
});
