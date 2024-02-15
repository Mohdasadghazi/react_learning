import React, { useState } from "react";
import { RangeSlider } from "./RangeSlider";

/* Function to generate combination of password */
function generatePass(ps, intChar, specChar) {
  let pass = "";
  let str = "";

  let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";
  let str2 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789";
  let str3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz@#$";
  let str4 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  if (intChar && specChar) {
    str = str4;
  } else if (intChar) {
    str = str2;
  } else if (specChar) {
    str = str3;
  } else {
    str = str1;
  }
  for (let i = 1; i <= ps; i++) {
    let char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  return pass;
}

const PasswordGeneartor = () => {
  const [password, setpassword] = useState("");
  const [psslenth, setpsslenth] = useState(0);
  const [intChar, setIntchar] = useState(false);
  const [specChar, setSpecChar] = useState(false);

  const handlepssClick = () => {
    let pass = generatePass(psslenth, intChar, specChar);
    setpassword(pass);
  };

  const handleCheckboxint = () => {
    setIntchar(!intChar);
  };

  const handleCheckboxspec = () => {
    setSpecChar(!specChar);
  };

  return (
    <>
      <div className="flex items-center border border-gray-300 p-2 rounded">
        <input
          type="text"
          value={password}
          readOnly
          className="flex-grow p-2 text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlepssClick}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Click Me
        </button>
      </div>
      <div className="mt-4">
        <RangeSlider sendValueToParent={(value) => setpsslenth(value)} />
        <div>
          <input
            type="checkbox"
            checked={intChar}
            onChange={handleCheckboxint}
            className="form-checkbox h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700 mx-2">Number</span>
          <input
            type="checkbox"
            checked={specChar}
            onChange={handleCheckboxspec}
            className="form-checkbox h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700 mx-2">Special_Character</span>
        </div>
      </div>
    </>
  );
};

export default PasswordGeneartor;
