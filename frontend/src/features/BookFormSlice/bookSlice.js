import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    Books : [{}]
}

export const bookSlice = createSlice({
    name:"Books",
    initialState,
    reducers:{}
});


export default bookSlice.reducer