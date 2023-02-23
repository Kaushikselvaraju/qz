import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import React from "react";
import { questionData } from "./components/questions";

function App() {
  var qCards;
  var startBtn;
  var resultBtn;

  const [startFlag, setStartFlag] = useState(false);
  const [resultFlag, setResultFlag] = useState(false);
  const [buttonText, setButtonText] = useState("Start Quiz");
  const [answered, setAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(questionData.length);

  function handleStart() {
    setResultFlag(false);
    setStartFlag(true);
    setScore(0);
    setButtonText("Started");
  }

  useEffect(() => {
    if (count > 0) return;
    setResultFlag(true);
  }, [count]);

  const PrintResult = (score, totalQuestions) => {
    return (
      <div>
        <div>
          Test finish your score is {score}/{questionData.length}
        </div>
        <button onClick={handleStart}>Start again</button>
      </div>
    );
  };

  if (startFlag) {
    qCards = (
      <div>
        {questionData.map((data, index) => (
          <Card
            question={data.question}
            options={[
              data.options.option1,
              data.options.option2,
              data.options.option3,
              data.options.option4,
            ]}
            key={index}
            answer={data.answer}
            handleAnswer={(flag) => {
              flag && setScore(score + 1);
              setCount(count - 1);
            }}
          >
            {" "}
          </Card>
        ))}
      </div>
    );

    startBtn = <></>;
  } else {
    startBtn = <Button onClick={handleStart}>Start Quiz</Button>;
  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {!resultFlag ? (
        <>
          {qCards}
          {startBtn}
        </>
      ) : (
        <div>
          <div>
            Test finish your score is {score}/{questionData.length}
          </div>
          <button onClick={handleStart}>Start again</button>
        </div>
      )}
    </div>
  );
}

export default App;
