import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

function MyCourseInfo() {

  const { couId, couName } = useParams();

  useEffect(() => {
    console.log("MyCourseInfo - DidMount");
  }, []);

  return (
    <div>

      <h1 className="text-2xl font-bold mb-3">
        Info about {couName}
      </h1>

      <p className="mb-4">
        Course Id : {couId} <br />
        MyCourse Info Here <br />
        MyCourse Info Here <br />
        MyCourse Info Here
      </p>

      <NavLink
        to="/courses"
        className="text-blue-600 hover:underline"
      >
        Back to Courses
      </NavLink>

    </div>
  );
}

export default MyCourseInfo;