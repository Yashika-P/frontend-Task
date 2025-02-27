import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEvents, fetchEventById } from "../api/api";  // ✅ CORRECT



const EventDetails = () => {
  const { eventId } = useParams(); // Get eventId from URL params
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const eventData = await fetchEvent(eventId); // ✅ Call API with eventId
        setEvent(eventData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load event details:", error);
        setLoading(false);
      }
    };

    if (eventId) getEvent(); // ✅ Ensure eventId is available before calling API
  }, [eventId]); // ✅ Re-run only when eventId changes

  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found!</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p className="text-sm text-gray-500">{event.date}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Buy Ticket</button>
    </div>
  );
};

export default EventDetail;
