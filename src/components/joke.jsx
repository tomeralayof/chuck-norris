import React from "react";

const Joke = ({ joke, isDataPassed, isTable }) => {
  const { value } = joke;
  if (!value && isDataPassed !== -1) return <div>loading...</div>;
  return (
    isDataPassed !== -1 && (
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
    )
  );
};

export default Joke;
