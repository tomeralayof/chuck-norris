import React from "react";
import Joke from "./joke";

const Modal = ({ joke }) => {
  return (
    <div
      style={{ backgroundColor: "#EFF4F7", width: "30rem" }}
      className="modal"
    >
      <div style={{ padding: "20px", margin: "auto" }}>
        <Joke joke={joke} />
      </div>
    </div>
  );
};

export default Modal;
