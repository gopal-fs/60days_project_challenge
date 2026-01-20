import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
    const {login}=useAuth()
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onformdata = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    await login(formData.email, formData.password);
    navigate("/home"); // 🔥 IMPORTANT
  };


  return (
    <div className="login">
      <input
        value={formData.email}
        onChange={onformdata}
        name="email"
        type="email"
      />

      <input
        value={formData.password}
        onChange={onformdata}
        name="password"
        type="password"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
