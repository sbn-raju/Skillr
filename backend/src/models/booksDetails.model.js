import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema({
    book_author:[
        {
            type: Schema.Types.ObjectId,
            ref:"FacultyUser"
        }
    ],
    book_title:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        index: true,
    },
    book_des:{
        type:String,
        required:true
    },
    book_Image:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
});

const Books = new mongoose.model("Book",bookSchema);

export default Books;