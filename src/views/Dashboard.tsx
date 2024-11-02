import { useState } from "react";

const Dashboard = () => {
  const [label, setLabel] = useState("Dashboard");

  return <h1>{label}</h1>;
};
export default Dashboard;
