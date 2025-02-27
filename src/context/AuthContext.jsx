import { createContext, useState, useEffect } from "react";
import { fetchEvents, fetchEventById } from "../api/api";  // ✅ Make sure it's a named import



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (email, password) => {
    const response = await api.post("/users/login", { email, password });
    localStorage.setItem("user", JSON.stringify(response.data));
    setUser(response.data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
