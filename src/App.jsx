import React from "react";
import AuthForm from "./AuthForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-4xl font-bold mb-8">
          Welcome to Our Blog!
        </h1>

        <AuthForm />

      </div>

    </div>
  );
}

export default App;