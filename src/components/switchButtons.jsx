import React from "react";

const SwitchButtons = ({ setisRandomClicked, isRandomClicked }) => {
  return (
    <div className="btn-container">
      <button
        className={isRandomClicked ? "active" : "btn"}
        onClick={() => setisRandomClicked(true)}
      >
        Random
      </button>
      <button
        className={!isRandomClicked ? "active" : "btn"}
        onClick={() => setisRandomClicked(false)}
      >
        Search
      </button>
    </div>
  );
};

export default SwitchButtons;
