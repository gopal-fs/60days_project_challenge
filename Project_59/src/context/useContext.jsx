import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase";


export const authContext=createContext(null)

const AuthState= (({children})=>{
    const [user,setUser]=useState('')
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)


            
        })
        return ()=>unsubscribe()
    },[])

    return (
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    )
})

export default AuthState