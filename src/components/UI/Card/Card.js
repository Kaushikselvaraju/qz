import React, { useState } from "react";
import Button from "../Button/Button";
const Card = ({
  question,
  correctAnswerMarkUpdate,
  attempt,
  options,
  answer,
  disabled,
  handleAnswer,
}) => {
  const [state, setSate] = useState(disabled);

  function disableBtn(option) {
    setSate(true);
    handleAnswer(option === answer);
  }

  return (
    <div>
      <h4>{question}</h4>
      {options.map((op, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              !disabled && disableBtn(op);
            }}
            disabled={state}
          >
            {op}
          </button>
        );
      })}
      {/* <Button onClick={disableBtn} disabled={state}>
        {options.option1}
      </Button>
      <Button onClick={disableBtn} disabled={state}>
        {options.option2}
      </Button>
      <Button onClick={disableBtn} disabled={state}>
        {options.option3}
      </Button>
      <Button onClick={disableBtn} disabled={state}>
        {options.option4}
      </Button> */}
    </div>
  );
};

export default Card;
