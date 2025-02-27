import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Event Management</h1>
      <Link to="/events" className="bg-blue-600 text-white px-4 py-2 rounded">Browse Events</Link>
    </div>
  );
};

export default Home;
