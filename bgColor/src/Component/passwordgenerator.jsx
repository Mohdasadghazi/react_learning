import React, { useState } from "react";
import { RangeSlider } from "./RangeSlider";

/* Function to generate combination of password */
function generatePass(passwordLength, includeNumbers, includeSpecialChars) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "@#$";

  let characters = alpha;
  if (includeNumbers) characters += numbers;
  if (includeSpecialChars) characters += specialChars;

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
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
