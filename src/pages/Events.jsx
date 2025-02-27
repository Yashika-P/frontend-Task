import { useState, useEffect } from "react";
import { fetchEvents, fetchEventById } from "../api/api";  // ✅ CORRECT


import EventCard from "../components/EventCard";


import { Link } from "react-router-dom";



const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    getEvents();
  }, []); // ✅ The empty dependency array ensures it runs only once

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
