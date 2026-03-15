const MyTextArea = ({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 5
}) => {
  return (
    <div className="mb-4">

      <label className="block font-medium mb-1">
        {label}
      </label>

      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full border rounded-lg p-2"
      />

    </div>
  );
};

export default MyTextArea;