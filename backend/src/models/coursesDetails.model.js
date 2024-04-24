import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    course_author:[
        {
            type: Schema.Types.ObjectId,
            ref:"FacultyUser"
        }
    ],
    course_title:{
        type: String,
        required : true,
       
    },
    course_des:{
        type:String,
        required:true
    },
    course_Image:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
});

const Course = new mongoose.model("Course",courseSchema);

export default Course