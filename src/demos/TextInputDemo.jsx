import { useState } from "react";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";

const TextInputDemo = () => {

  const [form, setForm] = useState({
    username: "sd",
    password: "sd"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form.username);
    console.log(form.password);

    setForm({
      username: "",
      password: ""
    });
  };

  return (
    <div className="mb-6">

      <h3 className="text-xl font-semibold mb-3">
        Text Input Demo
      </h3>

      <form onSubmit={handleSubmit}>

        <MyTextInput
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <MyTextInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <MyButton value="Submit Now" />

      </form>
    </div>
  );
};

export default TextInputDemo;