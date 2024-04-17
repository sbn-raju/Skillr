import mongoose from "mongoose";

async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB is connected");
    }
    catch(err){
        console.log("Error:", err);
    }
}

export default connectDb;