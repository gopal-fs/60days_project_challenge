import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../configs/firebase'
import toast from 'react-hot-toast'

const Register = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()


  const doSignUp=async(event)=>{
    event.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      await updateProfile(auth.currentUser,{displayName:name})
      navigate('/home')
    }
    catch(e){
      toast.error(e.message)
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
              <h1>Register to Continue...</h1>
              <label htmlFor='username'>Username</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className='form-control' id='username' type='text' placeholder='Enter Username..' required/>
              <label htmlFor='email'>Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' id='email' type='email' placeholder='Enter Your Mail..' required/>
              <label htmlFor='password'>Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' id='password' type='password' placeholder='Enter Your Password..' required/>
              <button type='button' onClick={doSignUp} className='button'>Sign Up</button>
              <p>OR</p>
              <button type='button' onClick={doSignInGoogle} className='button'>SignUp with Google</button>
  
  
  
          </form>
  
      </div>
      
    )
  
}

export default Register