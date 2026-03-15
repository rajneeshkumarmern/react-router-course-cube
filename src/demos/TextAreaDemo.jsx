import { useState } from "react";
import MyTextArea from "../components/MyTextArea";
import MyButton from "../components/MyButton";

const TextAreaDemo = () => {

  const [remarks, setRemarks] = useState("");

  const handleChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Remarks:", remarks);

    setRemarks("");
  };

  return (
    <div className="mb-6">

      <h3 className="text-xl font-semibold mb-3">
        Text Area Demo
      </h3>

      <form onSubmit={handleSubmit}>

        <MyTextArea
          label="Remarks"
          value={remarks}
          onChange={handleChange}
        />

        <MyButton value="Submit Now" />

      </form>

    </div>
  );
};

export default TextAreaDemo;