import mongoose, { Schema } from "mongoose";

const doubtsSchema = new mongoose.Schema({
    doubtsAsked:[
        {
            type : Schema.Types.ObjectId,
            ref :"User"
        }
    ],
    doubt:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
});
const Artical = new mongoose.model("Artical",articalSchema);
export default Artical;