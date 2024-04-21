import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        index: true,
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
},
{
    timestamps:true,
});

const User = new mongoose.model("User",userSchema);

export default User