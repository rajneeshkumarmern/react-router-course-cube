import React from "react";
import { Routes, Route } from "react-router-dom";

const JLCBody = () => {
  return (
    <div className="container mx-auto text-center">

      <Routes>

        <Route path="/" element={
          <>
            <h1 className="text-3xl font-bold">Home Page Displays -1</h1>
            <h1 className="text-2xl">Home Page Displays -2</h1>
          </>
        } />

        <Route path="/courses" element={
          <h1 className="text-3xl font-bold">Courses Page Here</h1>
        } />

        <Route path="/about" element={
          <h1 className="text-3xl font-bold">About Page Here</h1>
        } />

        <Route path="/contact" element={
          <h1 className="text-3xl font-bold">Contact Page Here</h1>
        } />

      </Routes>

    </div>
  );
};

export default JLCBody;