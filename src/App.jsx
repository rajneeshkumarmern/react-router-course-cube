import React from "react";
import AddBook from "./books/AddBook";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl">

        <div className="bg-blue-600 text-white p-4 rounded-t-lg text-center">
          <h2 className="text-xl font-semibold">
            Welcome to the Book Management System
          </h2>
        </div>

        <div className="p-6">
          <AddBook />
        </div>

      </div>
    </div>
  );
};

export default App;