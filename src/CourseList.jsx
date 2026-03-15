import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CourseList() {

  const [courseInfo] = useState([
    { courseId: 101, courseName: "React Course" },
    { courseId: 102, courseName: "Angular Course" },
    { courseId: 103, courseName: "Spring Boot Course" },
    { courseId: 104, courseName: "MicroServices Course" },
    { courseId: 105, courseName: "Java Full Stack Course" },
  ]);

  useEffect(() => {
    console.log("CourseList - DidMount");
  }, []);

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        Courses List
      </h1>

      <div className="space-y-2">

        {courseInfo.map((course) => (

          <div key={course.courseId}>

            <Link
              to={`/mycourses/${course.courseId}/${course.courseName}`}
              className="text-blue-600 hover:underline"
            >
              {course.courseName}
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CourseList;