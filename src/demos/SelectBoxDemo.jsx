import { useState } from "react";
import MyButton from "../components/MyButton";
import MySelectBox from "../components/MySelectBox";

const SelectBoxDemo = () => {

  const [timings, setTimings] = useState("");

  const timingOptions = [
    "Select Timings",
    "WeekDays",
    "WeekEnds"
  ];

  const handleChange = (e) => {
    setTimings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected Timing:", timings);

    setTimings("");
  };

  return (
    <div className="mb-6">

      <h3 className="text-xl font-semibold mb-3">
        Select Box Demo
      </h3>

      <form onSubmit={handleSubmit}>

        <MySelectBox
          label="Timings"
          name="timings"
          options={timingOptions}
          onChange={handleChange}
        />

        <MyButton value="Submit Now" />

      </form>

    </div>
  );
};

export default SelectBoxDemo;