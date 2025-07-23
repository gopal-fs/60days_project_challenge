import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/FirebaseAuth";



export const authContext=createContext(null)
export const gopalContext=createContext()

const ContextProvider=(props)=>{
    const phone='123456789'
    return (
        <gopalContext.Provider value={phone}>
            {props.children}
        </gopalContext.Provider>
    )
}



const AuthState=({children})=>{
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

}

export {ContextProvider,AuthState}