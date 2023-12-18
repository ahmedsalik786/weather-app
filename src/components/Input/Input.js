import React from "react";
import "./input.style.css";

function Input({ setCity, city }) {
  return (
    <div className="input-container">
      <input
        type="text"
        name=""
        placeholder="Enter city"
        id=""
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>search</button>
    </div>
  );
}

export default Input;
