import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Dashboard;
