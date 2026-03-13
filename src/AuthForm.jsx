import React, { useState } from "react";

function AuthForm() {

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
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

    if (isLogin) {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password
      });
    } else {
      console.log("Signup Data:", formData);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 w-96">

      <div className="flex justify-center gap-4 mb-6">

        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 rounded ${
            isLogin
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 rounded ${
            !isLogin
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Sign Up
        </button>

      </div>

      <form onSubmit={mySubmitHandler} className="space-y-4">

        {!isLogin && (
          <>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={myChangeHandler}
              className="w-full border p-2 rounded"
            />

            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={myChangeHandler}
              className="w-full border p-2 rounded"
            />
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={myChangeHandler}
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={myChangeHandler}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className={`w-full py-2 rounded text-white ${
            isLogin
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

      </form>

    </div>
  );
}

export default AuthForm;