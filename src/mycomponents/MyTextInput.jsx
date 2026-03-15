import React from "react";

const MyTextInput = ({
  name,
  label,
  value,
  onChange,
  error,
  type = "text"
}) => {

  return (
    <div>

      <label className="block mb-1 font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg p-2 outline-none
        ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
};

export default MyTextInput;