import React from "react";
import { Link } from "react-router-dom";

const JLCHeader = () => {
  return (
    <header className="bg-blue-600 text-white px-10 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-2xl font-bold" style={{marginRight:"20px"}}>
        Welcome to CourseCube!!!
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-8 text-lg font-medium">
          <li style={{marginRight:"20px", display:"inline"}}>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>

          <li style={{marginRight:"20px", display:"inline"}}>
            <Link to="/courses" className="hover:text-gray-200">
              Courses
            </Link>
          </li>

          <li style={{marginRight:"20px", display:"inline"}}>
            <Link to="/about" className="hover:text-gray-200">
              About Us
            </Link>
          </li>

          <li style={{marginRight:"20px", display:"inline"}}>
            <Link to="/contact" className="hover:text-gray-200">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default JLCHeader;