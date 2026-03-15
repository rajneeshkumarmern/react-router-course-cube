import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";

const Courses = lazy(() => import("./Courses"));

function JLCBody() {

  return (

    <Suspense fallback={<div className="text-center">Loading...</div>}>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/login" element={<Navigate to="/" />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </Suspense>

  );
}

export default JLCBody;