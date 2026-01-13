import { configureStore } from "@reduxjs/toolkit";
import { Products } from "./Products";
import { Cart } from "./Cart";



export const store=configureStore({
    reducer:{
        products:Products.reducer,
        cart:Cart.reducer
    }
})