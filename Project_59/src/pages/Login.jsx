import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../configs/firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();

    const doSignIn=async (event)=>{
        event.preventDefault()
        try{
            await signInWithEmailAndPassword(auth,email,password)
            navigate('/home')

        }
        catch(e){
            toast.error(e.message);
        }
    }

    const doSignInGoogle=async(event)=>{
        event.preventDefault()
        try{
            await signInWithPopup(auth,googleProvider)
            navigate('/home')
        }
        catch(e){
            toast.error(e.message)
        }


    }

  return (
    <div className='login-container'>
        <form className='login-card'>
            <h1>Login to Continue...</h1>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' id='email' type='email' placeholder='Enter Your Mail..' required/>
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' id='password' type='password' placeholder='Enter Your Password..' required/>
            <button type='button' onClick={doSignIn} className='button'>Sign In</button>
            <p>OR</p>
            <button type='button' onClick={doSignInGoogle} className='button'>Continue with Google</button>



        </form>

    </div>
    
  )
}

export default Login