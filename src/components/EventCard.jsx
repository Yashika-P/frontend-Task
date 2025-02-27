import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="border rounded p-4 shadow-lg">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p className="text-gray-600">{event.date} | {event.location}</p>
      <p className="text-gray-800">{event?.description?.slice(0, 100)}...</p> || "No description available";
      <Link to={`/events/${event._id}`} className="text-blue-600 hover:underline">View Details</Link>
    </div>
  );
};

export default EventCard;
