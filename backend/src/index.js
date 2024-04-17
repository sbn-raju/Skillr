//Importing the packages
import express from 'express';
import dotenv from 'dotenv';

//Configuration of the middlewares
dotenv.config();


//Importing the Database Module 
import connectionOfDatabase from "./db/connect.db.js";

//Importing the MongoDB models
// import User from './models/user.models.js';

// Importing the Routes 
import indexRoute from "./routes/index.routes.js";
import registerRoute from "./routes/register.routes.js";

//Connecting to the MongoDb Database

connectionOfDatabase();


//Init the app
const app = express();
app.use(express.json());


//App is listening
app.listen(process.env.PORT||8080,()=>{
    console.log("App is listening at the port");
});

//All the APIs Calls
app.get("/",indexRoute);
app.post("/register",registerRoute);



