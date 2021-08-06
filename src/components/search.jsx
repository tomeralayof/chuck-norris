import React, { useEffect, useState } from "react";
import search from "../services/searchAjax";
import Table from "./table";
import errorHandler from "../services/errorHandler";
import Error from "./error";
import Loading from "./loading";

const SearchJoke = () => {
  const [isSearchTyped, setSearchTyped] = useState(false);
  const [text, setText] = useState([]);
  const [results, setResult] = useState([]);
  const [err, setErr] = useState("");
  const [isDataPassed, setIsDataPasses] = useState(0);

  const handleChange = (e) => {
    let sign = e.target.value;
    sign ? setSearchTyped(true) : setSearchTyped(false);
    setText(sign);
  };

  const handleClick = async (text) => {
    try {
      const { data } = await search.freeText(text);
      data.result.sort((a, b) => {
        return new Date(b.created_at - a.created_at);
      });
      setResult(data);
      setIsDataPasses(1);
    } catch (err) {
      errorHandler(err, setErr, setIsDataPasses);
    }
  };

  return (
    <React.Fragment>
      <div className="random-container">
        <div className="search-board">
          <p className="key-word">Key Word(s)</p>
          <input onChange={(e) => handleChange(e)} type="text" />
          <button
            disabled={!isSearchTyped ? true : false}
            onClick={() => handleClick(text)}
            className={isSearchTyped ? "btn-unable" : "btn-disabled"}
          >
            Search
          </button>
        </div>
      </div>
      {isDataPassed === 1 ? <Table results={results} /> : null}
      {isDataPassed === -1 ? <Error err={err} /> : null}
    </React.Fragment>
  );
};

export default SearchJoke;
