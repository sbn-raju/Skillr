//Importing the packages
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//Configuration of the middlewares
dotenv.config();


//Importing the Database Module 
import connectionOfDatabase from "./db/connect.db.js";

//Importing the MongoDB models
// import User from './models/user.models.js';

// Importing the Routes 
import indexRoute from "./routes/index.routes.js";
import route from "./routes/register.routes.js"
import loginroute from "./routes/login.routes.js"



//Connecting to the MongoDb Database
connectionOfDatabase();


//Init the app
const app = express();

//MiddleWares using 
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//App is listening
app.listen(process.env.PORT||8080,()=>{
    console.log("App is listening at the port");
});

//All the APIs Calls/Routes
app.get("/",indexRoute);
app.post("/api/StudentRegister",route);
app.post("/api/FacultyRegister",route);
app.post("/api/studentLogin",loginroute);
app.post("/api/facultyLogin",loginroute);




