import React, { useState } from 'react';


import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../configs/FirebaseAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
      <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
      <p>Or</p>
      <button onClick={googleLogin}>Google SignIn</button>
    </div>
  );
};

export default Login;
