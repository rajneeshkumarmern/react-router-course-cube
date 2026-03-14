import React from "react";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-lg p-8 w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome to Java Learning Center
        </h2>

        <LoginForm />

      </div>

    </div>
  );
}

export default App;