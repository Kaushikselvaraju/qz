import React, { useState } from "react";
import Button from "../Button/Button";
const Card = ({
  key,
  question,
  correctAnswerMarkUpdate,
  attempt,
  options,
  answer,
}) => {
  const [state, setSate] = useState(false);

  function disableBtn(option) {
    correctAnswerMarkUpdate(answer === option);
    setSate(true);
  }

  return (
    <div>
      <h4>{question}</h4>
      <Button onClick={() => disableBtn(options.option1)} disabled={state}>
        {options.option1}
      </Button>
      <Button onClick={() => disableBtn(options.option2)} disabled={state}>
        {options.option2}
      </Button>
      <Button onClick={() => disableBtn(options.option3)} disabled={state}>
        {options.option3}
      </Button>
      <Button onClick={() => disableBtn(options.option4)} disabled={state}>
        {options.option4}
      </Button>
    </div>
  );
};

export default Card;
