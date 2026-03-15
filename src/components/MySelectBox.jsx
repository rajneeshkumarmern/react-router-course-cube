const MySelectBox = ({ label, name, options, onChange }) => {
  return (
    <div className="mb-4">

      <label className="block font-medium mb-1">
        {label}
      </label>

      <select
        name={name}
        onChange={onChange}
        className="w-full border rounded-lg p-2"
      >

        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}

      </select>

    </div>
  );
};

export default MySelectBox;