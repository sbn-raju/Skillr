//Importing the packages
import express from 'express';
import dotenv from 'dotenv';

//Configuration of the middlewares
dotenv.config();

// Exporting the functions
import indexRoute from "./routes/index.routes.js";




//Init the app
const app = express();


//App is listening
app.listen(process.env.PORT||8080,()=>{
    console.log("App is listening at the port");
});

//All the APIs Calls
app.get("/",indexRoute);



