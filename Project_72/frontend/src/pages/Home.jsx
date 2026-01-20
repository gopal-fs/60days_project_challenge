import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, loading } = useAuth();
  console.log(user)
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please Login");
      navigate("/");
    }
    
  }, [user, loading, navigate]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Welcome {user?.userId}</h1>
    </div>
  );
};

export default Home;
