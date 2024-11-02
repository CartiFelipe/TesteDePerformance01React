import { useState } from "react";

const SignsIn = () => {
  const [label, setLabel] = useState("Signs In");

  return <h1>{label}</h1>;
};
export default SignsIn;
