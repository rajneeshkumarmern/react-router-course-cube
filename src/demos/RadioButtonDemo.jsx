import { useState } from "react";
import MyButton from "../components/MyButton";

const RadioButtonDemo = () => {

  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gender);
  };

  return (
    <div className="mb-6">

      <h3 className="text-xl font-semibold mb-3">
        Radio Button Demo
      </h3>

      <form onSubmit={handleSubmit}>

        <label className="mr-4">
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>

        <MyButton value="Submit Now" />

      </form>
    </div>
  );
};

export default RadioButtonDemo;