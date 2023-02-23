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
  const [showResult, setShow] = useState(false);

  function handleStart() {
    setResultFlag(false);
    setCount(questionData.length);
    setStartFlag(true);
    setScore(0);
    setShow(false);
    setButtonText("Started");
  }

  useEffect(() => {
    if (count > 0) return;
    setResultFlag(true);
  }, [count]);

  const PrintResult = ({ score, totalQuestions }) => {
    return (
      <div>
        <div>
          Test finish your score is {score}/{totalQuestions}
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
            disabled={false}
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
      {!resultFlag && !showResult ? (
        <>
          {qCards}
          {startBtn}
        </>
      ) : resultFlag && !showResult ? (
        <div>
          {questionData.map((data, index) => (
            <Card
              disabled={true}
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
          {startBtn}
          <button onClick={() => setShow(true)}>show results</button>
        </div>
      ) : resultFlag && showResult ? (
        <>
          <div>
            Test finish your score is {score}/{questionData.length}
          </div>
          <button onClick={handleStart}>Start again</button>
        </>
      ) : null}
    </div>
  );
}

export default App;
