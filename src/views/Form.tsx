import { useState } from "react";

const Form = () => {
  const [label, setLabel] = useState("Form");
  return <h1>{label}</h1>;
};
export default Form;
