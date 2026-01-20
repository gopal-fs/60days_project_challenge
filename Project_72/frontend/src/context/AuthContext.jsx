import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔥 must be true

  // ✅ CALLED ON APP LOAD
  const getUser = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const res = await axios.get("http://localhost:3000/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
    } catch (err) {
      Cookies.remove("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 RUN ONCE
  useEffect(() => {
    getUser();
  }, []);

  

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      setUser(res.data.finalData.user);
      Cookies.set("token", res.data.finalData.token);
      toast.success(res.data.message);
    } catch (err) {
      toast.error("Unable to login");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
