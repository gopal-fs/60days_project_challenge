import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUserData=createAsyncThunk(
    "user/auth",
    async(_,thunkApi)=>{
        try{
            const res=await fetch("https://jsonplaceholder.typicode.com/users/1");

            if(!res.ok) return thunkApi.rejectWithValue("Failed to fetch with user");

            const data=await res.json();
            return data;

        }
        catch(err){
            return thunkApi.rejectWithValue(err.message);
        }
    }
)


const User=createSlice({
    name:"user",
    initialState:{
        error:null,
        user:null,
        loading:true,
        name:"",
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getUserData.pending,(state)=>{
            state.error=null;
            state.loading=true;
            
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            
            state.user=action.payload.name;
            state.loading=false;
            state.error=null;

        })
        .addCase(getUserData.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
            state.user=null;
        })
    }
})




export default User;