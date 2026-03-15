import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function JLCHeader(props) {

  useEffect(() => {
    console.log("JLCHeader - DidMount - ", props);

    return () => {
      console.log("JLCHeader - WillUnmount - ", props);
    };
  }, []);

  return (
    <div className="bg-blue-600 text-white p-4">

      <h1 className="text-2xl font-bold mb-4">
        Welcome to CourseCube!!!
      </h1>

      <ul className="flex gap-6 text-lg">

        <li>
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses?name=JLC#Hello" className="hover:underline">
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="hover:underline">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="hover:underline">
            Contact Us
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default JLCHeader;