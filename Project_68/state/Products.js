import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const ProductsData=createAsyncThunk(
    "products/productsData",
    async()=>{
        const res=await fetch("http://localhost:5000/products")
        console.log(res)
        return res.json()
    }
)


export const Products=createSlice({
    name:"products",
    initialState:{loading:false,error:false,data:[]},
    extraReducers:(builder)=>{
        builder.addCase(ProductsData.pending,(state)=>{
            state.loading=true 
        })
        builder.addCase(ProductsData.fulfilled,(state,action)=>{
            state.loading=false 
            state.data=action.payload
        })
        builder.addCase(ProductsData.rejected,(state)=>{
            state.error=true 
            state.loading=false

        })
    }
})


