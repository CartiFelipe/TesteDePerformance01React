import { useState } from "react";
import style from "./style.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <h1 style={{ padding: "0 1rem" }}>Form</h1>
      <form className={style.form}>
        <div>
          <label>
            Name:
            <input type="text" name="name" onChange={handleInputChange} />
          </label>
          <label>
            Age:
            <input type="number" name="age" onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={handleInputChange} />
          </label>
        </div>
        <input type="submit" value="Submit" onChange={handleInputChange} />
      </form>
    </div>
  );
};
export default Form;
