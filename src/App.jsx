import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import JLCHeader from "./JLCHeader";
import JLCBody from "./JLCBody";

function App(props) {

  useEffect(() => {
    console.log("App - DidMount - ", props);

    return () => {
      console.log("App - WillUnmount - ", props);
    };
  }, []);

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        <JLCHeader />

        <div className="p-6">
          <JLCBody />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;