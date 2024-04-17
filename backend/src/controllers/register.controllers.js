import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import { json } from "express";


const registerController = async(req,res)=>{
    // console.log("this is the Register pages");
    
    try{
    const {firstname, lastname, email, password} = req.body;
    if(!(firstname && lastname && email && password)){
         return res.status(404).json({message:"Data is not vald"});
    }
    const existingUser = await User.findOne({email});
        if(existingUser){
            return res.redirect("/");
        }
    const mEncryptPass = await bcrypt.hash(password, 10);
    await User.create({
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
    return res.status(200).json(User)
    }
    catch(err){
        console.log(err);
        return res.status(404).send("page not avaliable");
    }
    
   
    // res.status(200).json({message:"Ok"});
}

export default registerController;