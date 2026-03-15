import TextInputDemo from "./demos/TextInputDemo";
import TextAreaDemo from "./demos/TextAreaDemo";
import SelectBoxDemo from "./demos/SelectBoxDemo";
import RadioButtonDemo from "./demos/RadioButtonDemo";
import CheckBoxDemo from "./demos/CheckBoxDemo";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">

        <h2 className="text-center text-2xl font-bold mb-6">
          Welcome to Java Learning Center
        </h2>

        <TextInputDemo />
        <TextAreaDemo />
        <SelectBoxDemo />
        <RadioButtonDemo />
        <CheckBoxDemo />

      </div>
    </div>
  );
};

export default App;