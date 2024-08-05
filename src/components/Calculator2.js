import React from "react";
import { useState } from "react";
function Calculator2() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  function input1(e) {
    setNumber1(e.target.value);
  }
  function input2(e) {
    setNumber2(e.target.value);
  }

  function add_Click() {
    var n1 = parseInt(number1);
    var n2 = parseInt(number2);
    setResult(n1 + n2);
  }
  function sub_Click() {
    var n1 = parseInt(number1);
    var n2 = parseInt(number2);
    setResult(n1 - n2);
  }
  function multi_Click() {
    var n1 = parseInt(number1);
    var n2 = parseInt(number2);
    setResult(n1 * n2);
  }

  function divi_Click() {
    var n1 = parseInt(number1);
    var n2 = parseInt(number2);
    setResult(n1 / n2);
  }

  function clear_Click() {
    setNumber1("");
    setNumber2("");
    setResult("");
  }
  return (
    <>
      <div className="container calculatortop  ">
        <div className="calculator">
          <div>
            <input
              type="text"
              className="form-control"
              onChange={input1}
              value={number1}
              placeholder="Enter Any Number"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              className="form-control"
              onChange={input2}
              value={number2}
              placeholder="Enter Any Number"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Result"
              value={result}
            />
          </div>
          <div className="buttons">
            <button className="btn  btny " onClick={divi_Click}>
              %
            </button>
            <button className="btn  btnb" onClick={multi_Click}>
              X
            </button>
            <button className="btn  btny" onClick={add_Click}>
              +
            </button>
            <button className="btn  btnb" onClick={sub_Click}>
              -
            </button>
          </div>
          <button
            className="btn  form-control mt-3 clearbtn"
            onClick={clear_Click}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator2;
