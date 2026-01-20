import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Landing = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/home");
    }
  }, [user, loading]);


  return (
    <div>
      <h1>Landing</h1>
      <button onClick={()=>navigate('/login')}>
        Login
      </button>
      <button>SignUp</button>
    </div>
  )
}

export default Landing