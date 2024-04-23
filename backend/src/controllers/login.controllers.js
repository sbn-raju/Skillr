import User from "../models/studentUser.models.js";
import FacultyUser from "../models/facultyUser.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



const studentLoginController = async(req,res)=>{
    try{
        const{username, password} = req.body;
        if(!(username &&  password)){
        return res.status(404).json({
            message:"Provide Valid Input"
        });
        }
        const notExsistinguser = await User.findOne({username});
        if(!notExsistinguser){
            return res.status(404).json({
                message:"User not Exist Please Register",
            });
        }
        if(notExsistinguser && (await bcrypt.compare(password, notExsistinguser.password))){
               const token = jwt.sign(
               {id:User._id}
                ,process.env.MYSCREAT__JSON_KEY,
               {
                expiresIn :"1h"
               }
            );
           const options = {
            expires : new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            httpOnly:true
            };
           res.status(202).cookie("Your Token is:", token, options).json({
            success: true,
            token,
            User
           });
        }
    }
    catch(err){
        console.log("Error",err);
        return res.status(404).json({
            message:"Page Not Found"
        });
    }
}
const facultyLoginController = async(req,res)=>{
    try{
        const{username, password} = req.body;
        if(!(username &&  password)){
        return res.status(404).json({
            message:"Provide Valid Input"
        });
        }
        const notExsistinguser = await FacultyUser.findOne({username});
        if(!notExsistinguser){
            return res.status(404).json({
                message:"User not Exist Please Register",
            });
        }
        if(notExsistinguser && (await bcrypt.compare(password, notExsistinguser.password))){
               const token = jwt.sign(
               {id:User._id}
                ,process.env.MYSCREAT__JSON_KEY,
               {
                expiresIn :"1h"
               }
            );
           const options = {
            expires : new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            httpOnly:true
            };
           res.status(202).cookie("Your Token is:", token, options).json({
            success: true,
            token,
            FacultyUser
           });
        }
    }
    catch(err){
        console.log("Error",err);
        return res.status(404).json({
            message:"Page Not Found"
        });
    }
}



export { studentLoginController, facultyLoginController} ;