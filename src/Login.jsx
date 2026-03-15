import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInputText from "./MyInputText";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeHandler = (event) => {

    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmitHandler = (event) => {

    event.preventDefault();

    if (username === password) {
      navigate("/courses");
    } else {
      navigate("/");
    }
  };

  return (

    <div>

      <h2 className="text-2xl font-bold text-center mb-6">
        Login Form
      </h2>

      <form
        onSubmit={onSubmitHandler}
        className="space-y-4"
      >

        <MyInputText
          myname="username"
          mylabel="Username"
          myvalue={username}
          myOnChange={onChangeHandler}
        />

        <MyInputText
          mytype="password"
          myname="password"
          mylabel="Password"
          myvalue={password}
          myOnChange={onChangeHandler}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login Now
        </button>

      </form>

    </div>
  );
}

export default Login;