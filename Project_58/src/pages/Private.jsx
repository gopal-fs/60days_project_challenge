import React, { useContext } from 'react';

import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { authContext, gopalContext } from '../context/useContext';
import { auth } from '../configs/FirebaseAuth';

const Private = () => {
  const { user } = useContext(authContext);
  const phone=useContext(gopalContext)

  
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div>
      <h2>Private Page</h2>
      <h1>{phone}</h1>
      <h1>{user.displayName}</h1>
      {user && <p>Welcome, {user.email}</p>}
      <button onClick={logout}>Log Out</button>

      
    </div>
  );
};

export default Private;
