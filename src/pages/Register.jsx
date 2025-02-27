import { useState } from "react";
import { fetchEvents, fetchEventById } from "../api/api";  // ✅ CORRECT
import { registerUser } from "../api/api";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); // ✅ Using correct API function
      alert("Registration successful!");
      console.log(response);
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
