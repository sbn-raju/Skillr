import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    Courses:[
        {
            id:1,
            course_thumbnail:"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
            course_Title:"Java",
            course_Des:"lorem Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque quas quisquam dignissimos, assumenda consectetur libero repellendus sequi vel rerum nesciunt tempora ipsa ducimus"
        },
        {
            id:2,
            course_thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
            course_Title:"Python For Beginners",
            course_Des:"lorem Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque quas quisquam dignissimos, assumenda consectetur libero repellendus sequi vel rerum nesciunt tempora ipsa ducimus"
        },
        {
            id:3,
            course_thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmizqJ9MkOHqnZ36YJRtkcEE2Y4L0dU96cBq8tmKuBA&s",
            course_Title:"Javascript Advanced",
            course_Des:"lorem Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque quas quisquam dignissimos, assumenda consectetur libero repellendus sequi vel rerum nesciunt tempora ipsa ducimus"
        },
        {
            id:4,
            course_thumbnail:"https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png",
            course_Title:"MERN Full Stack",
            course_Des:"lorem Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque quas quisquam dignissimos, assumenda consectetur libero repellendus sequi vel rerum nesciunt tempora ipsa ducimus"
        },
        {
            id:5,
            course_thumbnail:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230706095706/intro-data-structure-%E2%80%93-1.png",
            course_Title:"Java with Data structure",
            course_Des:"lorem Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque quas quisquam dignissimos, assumenda consectetur libero repellendus sequi vel rerum nesciunt tempora ipsa ducimus"
        },
        {
            id:6,
            course_thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
            course_Title:"C++ For beginners",
            course_Des:"lorem Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab modi illum, sed beatae delectus, quibusdam labore itaque quas quisquam dignissimos, assumenda consectetur libero repellendus sequi vel rerum nesciunt tempora ipsa ducimus"
        }
    ]
}
export const courseSlice = createSlice({
    name:"Courses",
    initialState,
    reducers:{
    }

});


export default courseSlice.reducer