import { configureStore } from "@reduxjs/toolkit";
import User from "./User";
import { Counter } from "./Counter";



export const store=configureStore({
    reducer:{

        user:User.reducer,
        counter:Counter.reducer
    }
}
    
)

