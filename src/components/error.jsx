import React from "react";

const Error = ({ err }) => {
  return (
    <p className="err">
      <i className="fas fa-sad-tear"></i>
      {err}
    </p>
  );
};

export default Error;
