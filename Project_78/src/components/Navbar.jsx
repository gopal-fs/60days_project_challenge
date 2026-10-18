import {Handbag} from "lucide-react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/Auth";

const Navbar = () => {

    const navigate=useNavigate();
    const {isLogin,setIsLogin}=useContext(AuthContext);
  return (
    <div className="navbar">
        <h1>Amazon</h1>
        <div className="btns">
            <a onClick={()=>navigate('/home')}>Home</a>
            <a onClick={()=>navigate('/products')}>Products</a>
            <a onClick={()=>navigate('/about')}>About</a>
            <a onClick={()=>navigate('/contact')}>Contact</a>
            <a onClick={()=>navigate('/private')}>Private</a>

        </div>

        <div className="actions">
            <Handbag onClick={()=>navigate('/cart')} style={{cursor:"pointer"}} size={30} color="black" />
            <button onClick={()=>setIsLogin(prev=>!prev)}>{isLogin?"Logout":"Login"}</button>
        </div>
    </div>
  )
}

export default Navbar