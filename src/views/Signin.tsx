import { useState } from "react";

const SignsIn = () => {
  const [form, setForm] = useState({});

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input type="email" placeholder="Email" onChange={(e) => onHandleChange} />
        <input type="password" placeholder="Password" onChange={(e) => onHandleChange} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default SignsIn;
