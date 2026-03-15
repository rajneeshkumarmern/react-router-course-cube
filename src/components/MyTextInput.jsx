const MyTextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = ""
}) => {
  return (
    <div className="mb-4">

      <label className="block font-medium mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg p-2"
      />

    </div>
  );
};

export default MyTextInput;