import React, { useState } from "react";

function LoginForm() {

  const [formData, setFormData] = useState({
    username: "Srinivas",
    password: "Hello123"
  });

  const myChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();

    console.log("mysubmitHandler");
    console.log("UN:", formData.username);
    console.log("PW:", formData.password);
  };

  return (
    <form onSubmit={mySubmitHandler} className="space-y-4">

      <div>
        <label className="block mb-1 font-medium">
          Username
        </label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={myChangeHandler}
          placeholder="Enter Username..."
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={myChangeHandler}
          placeholder="Enter Password..."
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login Now
      </button>

      <p className="text-center mt-4">
        Welcome to {formData.username}
      </p>

    </form>
  );
}

export default LoginForm;