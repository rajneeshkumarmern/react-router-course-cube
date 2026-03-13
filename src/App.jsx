import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-center">Welcome to Java Learning Center</h2>
      </div>

      <div className="card-body">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;