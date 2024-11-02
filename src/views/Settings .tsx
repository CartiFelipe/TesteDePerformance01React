import { useState } from "react";

const Settings = () => {
  const [label, setLabel] = useState("Settings");
  return <h1>{label}</h1>;
};
export default Settings;
