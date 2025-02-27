import { useState } from "react";
import { fetchEvents, fetchEventById } from "../api/api";  // ✅ CORRECT


import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [formData, setFormData] = useState({ title: "", description: "", date: "", location: "", price: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/events", formData);
    navigate("/events");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" placeholder="Event Title" onChange={handleChange} className="border p-2" />
        <input name="description" placeholder="Event Description" onChange={handleChange} className="border p-2" />
        <input name="date" type="date" onChange={handleChange} className="border p-2" />
        <input name="location" placeholder="Location" onChange={handleChange} className="border p-2" />
        <input name="price" type="number" placeholder="Ticket Price" onChange={handleChange} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
