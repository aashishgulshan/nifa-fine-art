import React from "react";

function Button({ btnValue }) {
  return (
    <button className="font-light bg-gradient-to-r from-[#b11e6f] to-[#4a0ec0] text-white py-2 px-4 border-2 border-white rounded-full inline">
      {btnValue}
    </button>
  );
}

export default Button;
