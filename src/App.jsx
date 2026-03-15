import React from "react";
import { BrowserRouter } from "react-router-dom";
import JLCHeader from "./JLCHeader";
import JLCBody from "./JLCBody";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        <JLCHeader />

        <div className="max-w-3xl mx-auto mt-8 bg-white shadow rounded p-6">
          <JLCBody />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;