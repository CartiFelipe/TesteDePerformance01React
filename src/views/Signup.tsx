import { useState } from "react";

const Signup = () => {
  const [label, setLabel] = useState("Sign Up");

  return <h1>{label}</h1>;
};
export default Signup;
