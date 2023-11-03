import React, { useState } from "react";
import { Helmet } from "react-helmet-async";


function CustomHook() {
  const [value, setValue] = useState(0);
  
  const handleIncrement = () => {
    setValue((count) => count + 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  const handleDecrement = () => {
    setValue((count) => count - 1);
  };
  return (
    <>
    <Helmet>
      <title>Counter</title>
      <meta
        name="description"
        content="Increment and decrement counter" />
        <link rel="canonical" href="/counter" />
    </Helmet>
      <h2>Counter App made with custom hook</h2>
      <div className="main-box">
        <h1>Counter App</h1>
        <span className="output">{value}</span>
        <div className="btn-container">
          <button className="increase" onClick={handleIncrement}>
            Increment
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
          <button className="decrease" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomHook;