
import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import toast from 'react-hot-toast';

const ProtectedLayout = () => {
    const {isLogin}=useContext(AuthContext);

    useEffect(()=>{
        if(!isLogin) toast.error("You are not Authenticated");
    },[isLogin])

    if(!isLogin) return <Navigate to="/" replace />
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedLayout