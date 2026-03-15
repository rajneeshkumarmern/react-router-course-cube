import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";
import MyCourseInfo from "./MyCourseInfo";

function JLCBody(props) {

  useEffect(() => {
    console.log("JLCBody - DidMount - ", props);

    return () => {
      console.log("JLCBody - WillUnmount - ", props);
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/mycourses/:couId/:couName" element={<MyCourseInfo />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div>
  );
}

export default JLCBody;