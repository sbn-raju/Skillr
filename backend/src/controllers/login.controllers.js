import User from "../models/studentUser.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const loginController = async(req,res)=>{
    try{
        const{email, password} = req.body;
        if(!(email &&  password)){
        return res.status(404).json({
            message:"Provide Valid Input"
        });
        }
        const notExsistinguser = await User.findOne({email});
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

export default loginController;