import React, { useEffect, useState } from "react";
function TimerCounter() {
  var d = new Date();
  var [currentTime, setCurrenttime] = useState(d.toLocaleTimeString());
  var [count, setCount] = useState(0);

  function changeTime() {
    var d = new Date();
    setCurrenttime(d.toLocaleTimeString());
  }

  function changeCounter() {
    setCount((prev) => prev + 1);
    console.log(count);
  }

  useEffect(() => {
    setInterval(changeTime, 1000);
    setInterval(changeCounter, 1000);
  }, []);

  return (
    <>
      <div className="container-fluid timerMrng">
        <h1 className="text-center">
          <span className="timerh">Timer and Counter</span>
        </h1>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="row justify-content-center  timerbg p-4">
              <div className="col-md-12  bgchild">
                <h1>Current Time:{currentTime}</h1>
              </div>
              <div className="col-md-12  bgchild2 mt-1">
                <h1>Counter:{count}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimerCounter;
