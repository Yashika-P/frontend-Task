import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Ensure backend is running

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const fetchEventById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/events/${id}`);
  return response.data;
};

export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_BASE_URL}/events`, eventData);
  return response.data;
};

export const updateEvent = async (id, eventData) => {
  const response = await axios.put(`${API_BASE_URL}/events/${id}`, eventData);
  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/events/${id}`);
  return response.data;
};

