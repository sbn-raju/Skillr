import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/studentUser.models.js";
import FacultyUser  from "../models/facultyUser.models.js";


const studentRegisterController = async(req,res)=>{    
    try{
    const {username, firstname, lastname, email, password} = req.body;
    if(!(username && firstname && lastname && email && password)){
         return res.status(404).json({message:"Data is not vald"});
    }
    const existingUser = await User.findOne({email, username});
        if(existingUser){
            return res.redirect("/");
        }
    const mEncryptPass = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        firstname,
        lastname,
        email,
        password : mEncryptPass,
    });
    const token = jwt.sign(
        {
            id: User._id
        },
        process.env.MYSCREAT__JSON_KEY,
        {
            expiresIn :"1h"
        }
    );
    User.token = token
    User.password = undefined
    return res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        return res.status(404).send("page not avaliable");
    }
}
const facultyRegisterController = async(req,res)=>{
    try{
        const {username, firstname, lastname, email, password} = req.body;
    if(!(username && firstname && lastname && email && password)){
         return res.status(404).json({message:"Data is not vald"});
    }
    const existingUser = await FacultyUser.findOne({email, username});
        if(existingUser){
            return res.redirect("/");
        }
    const mEncryptPass = await bcrypt.hash(password, 10);
    const facultyuser = await FacultyUser.create({
        username,
        firstname,
        lastname,
        email,
        password : mEncryptPass,
    });
    const token = jwt.sign(
        {
            id: User._id
        },
        process.env.MYSCREAT__JSON_KEY,
        {
            expiresIn :"1h"
        }
    );
    FacultyUser.token = token
    FacultyUser.password = undefined
    return res.status(200).json(facultyuser);
    }
    catch(err){
       console.log(err);
       res.status(500).json({
        message:"Internal Server Error",
       });
    }
}

export {studentRegisterController, facultyRegisterController};