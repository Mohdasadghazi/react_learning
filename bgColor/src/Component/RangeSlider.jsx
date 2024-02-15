import React, { useState } from "react";

export const RangeSlider = ({ sendValueToParent }) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
    sendValueToParent(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="mt-2 text-gray-700">Value: {value}</div>
    </div>
  );
};
