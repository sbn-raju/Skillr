import mongoose, { Schema } from "mongoose";

const articalSchema = new mongoose.Schema({
    artical_author:[
        {
            type : Schema.Types.ObjectId,
            ref :"FacultyUser"
        }
    ],
    artical_title:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        index: true,
    },
    artical_des:{
        type:String,
        required:true
    },
    
},
{
    timestamps:true,
});

const Artical = new mongoose.model("Artical",articalSchema);

export default Artical;