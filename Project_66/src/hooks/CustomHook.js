export const UseLocalStorage=(val)=>{
    localStorage.setItem("value",val)
    return 
}

export const RemoveLocalStorage=()=>{
    localStorage.removeItem("value")
}

export const GetLocalStorage=()=>{
    const res=localStorage.getItem("value")
    return res
}