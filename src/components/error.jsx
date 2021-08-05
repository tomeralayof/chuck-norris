import React from "react";

const Error = ({ err }) => {
  return (
    <div className="joke-container">
      <p className="err">
        <i className="fas fa-sad-tear"></i>
        {err}
      </p>
      ;
    </div>
  );
};

export default Error;
