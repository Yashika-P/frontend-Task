import { useState, useContext } from "react";
import { fetchEvents, fetchEventById } from "../api/api";  // ✅ CORRECT
import { loginUser } from "../api/api";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData); // ✅ Using correct API function
      alert("Login successful!");
      console.log(response);
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };
    
    const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    });

    console.log("Login Success:", response.data);
      alert("Login Successful!");
    } catch (error) {
      console.error("Login Error:", error.response ? error.response.data : error.message);
    }
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
