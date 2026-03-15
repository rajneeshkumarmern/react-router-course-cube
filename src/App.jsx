import React from "react";
import { BrowserRouter } from "react-router-dom";
import JLCHeader from "./JLCHeader";
import JLCBody from "./JLCBody";
import JLCFooter from "./JLCFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">

        <JLCHeader />

        <div className="flex-grow p-6">
          <JLCBody />
        </div>

        <JLCFooter />

      </div>
    </BrowserRouter>
  );
}

export default App;