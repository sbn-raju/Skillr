import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const userApiAuth = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/api/auth/",
    }),
    endpoints:(builder)=>({
        userLogin : builder.mutation({
            query:(user)=>({
                url:"login",
                method:"POST",
                body:user
            })
        })
    })
});

export const {useUserLoginMutation} = userApiAuth