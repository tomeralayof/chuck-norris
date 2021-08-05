import React from "react";

const Joke = ({ joke }) => {
  const { value } = joke;
  return (
    <div className="joke-containe">
      <div className="left-quote">
        <i className="fas fa-quote-left"></i>
      </div>
      <div className="borde-text">
        <p className="joke">{value}</p>
      </div>
      <div className="right-quote">
        <i className="fas fa-quote-right"></i>
      </div>
    </div>
  );
};

export default Joke;
