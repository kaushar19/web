import React, { useState } from "react";
function CountNumber() {
  const [count, setCount] = useState(0);
  function Increase(e) {
    setCount(count + 1);
  }
  function Decrease(e) {
    setCount(count - 1);
  }
  return (
    <>
      <div className="flex-container  counttop ">
        <div style={{ alignSelf: "center" }}>
          <button className="btn countbtn " onClick={Decrease}>
            <span className="btntext">Decrease</span>
          </button>
        </div>
        <div style={{ alignSelf: "center", fontSize: 30 }}>{count}</div>
        <div style={{ alignSelf: "center" }}>
          <button className="btn countbtn" onClick={Increase}>
            <span className="btntext">Increase</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CountNumber;
