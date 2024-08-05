import { useState } from "react";
import React from "react";
function Calculator1() {
  const [input, setInput] = useState("");
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  return (
    <>
      <div className="container  calculatortop">
        <div className="calculator ">
          <input
            type="text"
            className="form-control"
            value={input}
            readOnly=""
          />
          <div className="buttons">
            <button
              className="btn  btny "
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
            <button
              className="btn  btny"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>

            <button
              className="btn  btny"
              onClick={() => handleButtonClick("/")}
            >
              %
            </button>
            <button
              className="btn  btny"
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>

            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className="btn  btnb "
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className="btn  btny"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className="btn  btny"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className="btn  btnb"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className="btn  btny"
              onClick={() => handleButtonClick("=")}
            >
              =
            </button>
          </div>
          <button
            className="btn  form-control mt-3 clearbtn"
            onClick={() => handleButtonClick("C")}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator1;
