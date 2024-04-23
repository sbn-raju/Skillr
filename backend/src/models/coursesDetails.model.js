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
        unique: true,
        lowercase: true,
        index: true,
    },
    course_des:{
        type:String,
        required:true
    },
    course_feature_one:{
        type:String,
        required:true,
    },
    course_feature_two:{
        type:String,
        required:true,
    },
    course_feature_three:{
        type:String,
        required:true,
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