import { useState } from "react";
import ButtonComponent from "../components/button/Index";

const Home = () => {
  const [label, setLabel] = useState("Clique em mim");

  return (
    <div>
      <h1>Desenvolvimento web com react (Home)</h1>
      <hr />
      <h1>Bottão material ui abaixo : </h1>
      <ButtonComponent sx={{ margin: "0.7rem" }} props={undefined}>
        {label}
      </ButtonComponent>
    </div>
  );
};
export default Home;
