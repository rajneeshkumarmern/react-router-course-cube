import { useState } from "react";
import MyButton from "../components/MyButton";

const CheckBoxDemo = () => {

  const [courses, setCourses] = useState([
    { id: 1, value: "React JS", checked: true },
    { id: 2, value: "Angular", checked: false },
    { id: 3, value: "Spring Boot", checked: true },
    { id: 4, value: "MicroServices", checked: false },
    { id: 5, value: "DevOps", checked: false }
  ]);

  const handleChange = (e) => {

    const updated = courses.map(course =>
      course.value === e.target.value
        ? { ...course, checked: e.target.checked }
        : course
    );

    setCourses(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selected = courses
      .filter(c => c.checked)
      .map(c => c.value);

    console.log(selected);
  };

  return (
    <div className="mb-6">

      <h3 className="text-xl font-semibold mb-3">
        Checkbox Demo
      </h3>

      <form onSubmit={handleSubmit}>

        {courses.map(course => (
          <label key={course.id} className="block">

            <input
              type="checkbox"
              value={course.value}
              checked={course.checked}
              onChange={handleChange}
            />

            {course.value}

          </label>
        ))}

        <MyButton value="Submit Now" />

      </form>
    </div>
  );
};

export default CheckBoxDemo;