import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../../../firebase/config/fireconfig";



export const createuser=createAsyncThunk(
    "user/createuser",async(data,thunkApi)=>{
        try{
            const res= await createUserWithEmailAndPassword(auth,data.email,data.password)
            console.log(res,"response")
        }catch(error){
            console.log(error?.customData?._tokenResponse?.error.message
                ,"thunk--------------> error")
            throw thunkApi.rejectWithValue(error)
        }
    }
)



const userSlice=createSlice({
    name:"user",
    initialState:{
        userDetail:[],
        isLoading:true,
        error:null
    },
    extraReducers(builder){
        builder
        .addCase(createuser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createuser.fulfilled,(state)=>{
            state.isLoading=false
            
        })
        .addCase(createuser.rejected,(state,action)=>{
            state.isLoading=false,
            state.error=action.payload
        })
    }
})
export const userReducer=userSlice.reducer