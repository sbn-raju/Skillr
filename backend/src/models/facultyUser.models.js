import mongoose from "mongoose";

const facultySchame = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        index: true,
    },
    fullname:{
        type:String,
        required:true
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
    }
},{
    timestamps:true,
});

const FacultyUser = new mongoose.model("FacultyUser", facultySchame);

export default FacultyUser;

