const MyRadioButton = ({
  label,
  name,
  value,
  checked,
  onChange
}) => {

  return (
    <label className="flex items-center space-x-2 mr-6">

      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />

      <span>{label}</span>

    </label>
  );
};

export default MyRadioButton;