import React, { useEffect, useState } from "react";
import test from "../services/randomAjax";
import Joke from "./joke";
import Error from "./error";
import errorHandler from "../services/errorHandler";
import Category from "./category";

const RandomJoke = () => {
  const [isTyped, setIsTyped] = useState(false);
  const [categories, setCategories] = useState([]);
  const [obj, setObj] = useState({});
  const [joke, setJoke] = useState([]);
  const [err, setErr] = useState("");
  const [isDataPassed, setIsDataPasses] = useState(0);

  let object = {
    category: "",
    name: "",
  };

  useEffect(() => {
    setObj(object);
    test.getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  useEffect(() => {
    obj.name !== "" || obj.category !== ""
      ? setIsTyped(true)
      : setIsTyped(false);
  }, [obj]);

  const handleChange = (e) => {
    let sign = e.target.value;
    const object1 = { ...obj };
    object1.name = sign;
    setObj(object1);
  };

  const setOption = (e) => {
    let category = e.target.value;
    const object1 = { ...obj };
    object1.category = category;
    setObj(object1);
  };

  const handleClick = async (object) => {
    try {
      const { data } = await test.randomOptions(object);
      setJoke(data);
      setIsDataPasses(1);
    } catch (err) {
      errorHandler(err, setErr, setIsDataPasses);
    }
  };

  if (!joke && isDataPassed === 1) return <div>loading...</div>;
  return (
    <React.Fragment>
      <div className="random-container">
        <div className="items">
          <p className="box">Your name</p>

          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="text"
            placeholder="e.g. chuck norris"
          />
          <p className="text">Categories</p>

          <select
            className="input"
            name="categories"
            id="categories "
            onClick={(e) => setOption(e)}
          >
            <option value="">choose category</option>
            {categories.map((category, idx) => {
              return <Category key={idx} category={category} />;
            })}
          </select>

          <button
            onClick={() => handleClick(obj)}
            className={isTyped ? "btn-unable" : "btn-disabled"}
            disabled={isTyped ? false : true}
          >
            Go!
          </button>
        </div>
      </div>
      {isDataPassed === 1 ? (
        <Joke isDataPassed={isDataPassed} joke={joke} />
      ) : null}
      {isDataPassed === -1 ? <Error err={err} /> : null}
    </React.Fragment>
  );
};

export default RandomJoke;
