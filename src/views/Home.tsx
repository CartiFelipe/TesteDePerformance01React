import { useState } from "react";
import ButtonComponent from "../components/button/Index";

const Home = () => {
  const [label, setLabel] = useState("Clique em mim");

  return (
    <div>
      <h1>Bottão material ui</h1>
      <ButtonComponent props={undefined}>{label}</ButtonComponent>
    </div>
  );
};
export default Home;
