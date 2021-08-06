import React, { useState } from "react";
import Joke from "./joke";

const TableTow = ({ res, joke, toggleClick, dateToDisplay }) => {
  const [isTable] = useState(true);
  return (
    <React.Fragment>
      <div
        onClick={() => toggleClick(res)}
        className={res === joke ? "ite-active ite-4" : "ite ite-4"}
      >
        {res.id}
      </div>
      <div
        onClick={() => toggleClick(res)}
        className={res === joke ? "ite-active ite-4" : "ite ite-5"}
      >
        {res.categories.length ? res.categories : "-"}
      </div>
      <div
        onClick={() => toggleClick(res)}
        className={res === joke ? "ite-active ite-4" : "ite ite-5"}
      >
        {dateToDisplay}
      </div>

      {res === joke ? (
        <div className="ite-active ite-5">
          <Joke joke={joke} />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default TableTow;
