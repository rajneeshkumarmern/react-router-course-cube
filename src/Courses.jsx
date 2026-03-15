import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseList from "./CourseList";

function Courses() {

  const location = useLocation();

  useEffect(() => {
    console.log("Courses - DidMount");
    console.log("Hash:", location.hash);
    console.log("Path:", location.pathname);
    console.log("Search:", location.search);
  }, []);

  return <CourseList />;
}

export default Courses;