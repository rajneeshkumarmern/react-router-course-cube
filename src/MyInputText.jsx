import React from "react";
import PropTypes from "prop-types";

function MyInputText({
  mylabel,
  mytype,
  myname,
  myvalue,
  myplaceholder,
  myOnChange,
}) {

  return (

    <div>

      <label className="block font-semibold mb-1">
        {mylabel}
      </label>

      <input
        type={mytype}
        name={myname}
        placeholder={myplaceholder}
        value={myvalue}
        onChange={myOnChange}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />

    </div>

  );
}

MyInputText.propTypes = {
  mylabel: PropTypes.string.isRequired,
  myname: PropTypes.string.isRequired,
  myvalue: PropTypes.string.isRequired,
  myOnChange: PropTypes.func.isRequired,
};

MyInputText.defaultProps = {
  mytype: "text",
  myplaceholder: "",
};

export default MyInputText;