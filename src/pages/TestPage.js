import React, { useState } from "react";

export const TestPage = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw Error("Something went wrong");
  }

  const handleError = () => {
    setError(true);
  };

  return (
    <div className="testPage">
        <h1>Click below to test for ErrorBoundary</h1>
      <button onClick={handleError}>
        TestPage
      </button>
    </div>

    
  );
};