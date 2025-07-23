import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth, googleProvider } from '../configs/FirebaseAuth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [user,setUsername]=useState('')
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    try {
      const credential=await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credential.user,
        {displayName:user}
      )
      navigate('/private');
    } catch (err) {
      alert(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/private');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='login'>
        <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
      <p>Or</p>
      <button onClick={googleLogin}>Google SignIn</button>
    </div>
  );
};

export default Register;
