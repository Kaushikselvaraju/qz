import React from "react";

const Banner = ({ score, handleStart }) => {
  return (
    <div className="banner">
      You have answered {score} / 5 Correctly
      <div>
        <button onClick={handleStart}>Start Quiz</button>
      </div>
    </div>
  );
};

export default Banner;
