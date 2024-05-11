import {configureStore} from "@reduxjs/toolkit"
import courseReducers from "../features/CourseFormSlice/courseSlice.js"
import bookReducers from "../features/BookFormSlice/bookSlice.js"
import articalReducers from "../features/ArticalesSlice/articalSlice.js"

export const store = configureStore({
    reducer:{
        courseReducers,
        bookReducers,
        articalReducers
    }
})

export default store