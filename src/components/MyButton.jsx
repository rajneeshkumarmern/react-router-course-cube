const MyButton = ({ value, type = "submit" }) => {
  return (
    <button
      type={type}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700"
    >
      {value}
    </button>
  );
};

export default MyButton;