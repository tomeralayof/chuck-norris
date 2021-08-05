import React, { useState } from "react";
import RandomJoke from "./randomJoke";
import SearchJoke from "./search";
import SwitchButtons from "./switchButtons";

const Main = () => {
  const [isRandomClicked, setisRandomClicked] = useState(true);

  return (
    <div className="main-container">
      <SwitchButtons
        setisRandomClicked={setisRandomClicked}
        isRandomClicked={isRandomClicked}
      />
      {isRandomClicked ? <RandomJoke /> : <SearchJoke />}
    </div>
  );
};

export default Main;
