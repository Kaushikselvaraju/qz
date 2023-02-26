// import { useState } from 'react';
// import './App.css';
// import Button from "./components/UI/Button/Button";
// import Card from "./components/UI/Card/Card";
// import React from 'react';
// function App() {

//   var qCards;
//   var startBtn;
//   var resultBtn;

//   const questionData = [
//     {
//       key:1,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },
//     {
//       key : 2,
//       question : "What color is are the leaves ?",
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1 : "Blue",
//         option2 : "Red",
//         option3 : "Yellow",
//         option4 : "Green",
//       },
//       answer : "Green"
//     },
//     {
//       key:3,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },
//     {
//       key:4,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },
//     {
//       key:5,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },

//   ]
//   const [startFlag, setStartFlag] = useState(false);
//   const [resultFlag, setResultFlag] = useState(false);
//   const [buttonText, setButtonText] = useState('Start Quiz');
//   const [questionsCorrect, setQuestionsCorrect] = useState(0);
//   const [answered, setAnswered] = useState(0);

//   function handleStart()
//   {
//     setStartFlag(true);
//     setButtonText('Started');
//   }

//   if(startFlag)
//   {
//     qCards =
//     <div>
//       {
//         questionData.map((data) =>
//           <Card question= {data.question} options = {{
//             option1 : data.options.option1,
//             option2 : data.options.option2,
//             option3 : data.options.option3,
//             option4 : data.options.option4,
//           }} > </Card>)
//       }
//     </div>

//     startBtn = <></>;
//   }
//   else
//   {
//     startBtn = <Button onClick = {handleStart}>Start Quiz</Button>;
//   }

//   return (
//     <div className="App">
//       <h1>
//         Quizz App
//       </h1>
//       {qCards}
//       {startBtn}
//     </div>
//   );
// }

// export default App;
// import { useState } from 'react';
// import './App.css';
// import Button from "./components/UI/Button/Button";
// import Card from "./components/UI/Card/Card";
// import Banner from "./components/UI/Banner/Banner";
// import React from 'react';

// function App() {

//   var qCards;
//   var startBtn;
//   var resultBtn;

//   const questionData = [
//     {
//       key:1,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },
//     {
//       key : 2,
//       question : "What color is are the leaves ?",
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1 : "Blue",
//         option2 : "Red",
//         option3 : "Yellow",
//         option4 : "Green",
//       },
//       answer : "Green"
//     },
//     {
//       key:3,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },
//     {
//       key:4,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },
//     {
//       key:5,
//       question:'Who is the father of the nation ?',
//       //correctAnswerMarkUpdate,
//       //attempt,
//       options : {
//         option1: 'Mahatma Gandhi',
//         option2: 'Jawaharlal Nehru',
//         option3: 'Donald Trump',
//         option4: 'Barrack Obama'
//       },
//       answer : 'Mahatma Gandhi'
//     },

//   ]
//   const [startFlag, setStartFlag] = useState(false);
//   const [resultFlag, setResultFlag] = useState(false);
//   const [buttonText, setButtonText] = useState('Start Quiz');
//   const [questionsCorrect, setQuestionsCorrect] = useState(0);
//   const [answered, setAnswered] = useState(0);

//   function handleStart()
//   {
//     setStartFlag(true);
//     setButtonText('Started');
//   }

//   if(startFlag)
//   {
//     qCards =
//     <div>
//       {
//         questionData.map((data) =>
//           <Card question= {data.question} options = {{
//             option1 : data.options.option1,
//             option2 : data.options.option2,
//             option3 : data.options.option3,
//             option4 : data.options.option4,
//           }} > </Card>)
//       }
//     </div>

//     startBtn = <></>;
//     resultBtn = <Button onClick={() => setResultFlag(true)}>Show Results</Button>
//   }
//   else
//   {
//     startBtn = <Button onClick={handleStart}>Start Quiz</Button>;
//     resultBtn = <></>;
//   }

//   return (
//     <div className="App">
//       <h1>
//         Quizz App
//       </h1>
//       {qCards}
//       {startBtn}
//       {resultBtn}
//       {resultFlag && <Banner>{`You have answered ${questionsCorrect} / ${answered}  Correctly`}</Banner>}
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";
import React from "react";

function App() {
  var qCards;
  var startBtn;
  var resultBtn;

  const questionData = [
    {
      key: 1,
      question: "Who is the father of the nation ?",
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: "Mahatma Gandhi",
        option2: "Jawaharlal Nehru",
        option3: "Donald Trump",
        option4: "Barrack Obama",
      },
      answer: "Mahatma Gandhi",
    },
    {
      key: 2,
      question: "What color is are the leaves ?",
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: "Blue",
        option2: "Red",
        option3: "Yellow",
        option4: "Green",
      },
      answer: "Green",
    },
    {
      key: 3,
      question: "Who is the father of the nation ?",
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: "Mahatma Gandhi",
        option2: "Jawaharlal Nehru",
        option3: "Donald Trump",
        option4: "Barrack Obama",
      },
      answer: "Mahatma Gandhi",
    },
    {
      key: 4,
      question: "Who is the father of the nation ?",
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: "Mahatma Gandhi",
        option2: "Jawaharlal Nehru",
        option3: "Donald Trump",
        option4: "Barrack Obama",
      },
      answer: "Mahatma Gandhi",
    },
    {
      key: 5,
      question: "Who is the father of the nation ?",
      //correctAnswerMarkUpdate,
      //attempt,
      options: {
        option1: "Mahatma Gandhi",
        option2: "Jawaharlal Nehru",
        option3: "Donald Trump",
        option4: "Barrack Obama",
      },
      answer: "Mahatma Gandhi",
    },
  ];
  const [startFlag, setStartFlag] = useState(false);
  const [resultFlag, setResultFlag] = useState(false);
  const [buttonText, setButtonText] = useState("Start Quiz");
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);

  function handleStart() {
    setResultFlag(false);
    setQuestionsCorrect(0);
    setAnswered(0);
    setStartFlag(true);
    setButtonText("Started");
  }

  function handleOptionClick(isCorrect) {
    setAnswered(answered + 1);
    if (isCorrect) {
      setQuestionsCorrect(questionsCorrect + 1);
    }
  }

  if (startFlag) {
    qCards = (
      <div>
        {questionData.map((data) => (
          <Card
            key={data.key}
            question={data.question}
            options={{
              option1: data.options.option1,
              option2: data.options.option2,
              option3: data.options.option3,
              option4: data.options.option4,
            }}
            answer={data.answer}
            onOptionClick={handleOptionClick}
            correctAnswerMarkUpdate={(flag) => handleOptionClick(flag)}
          >
            {" "}
          </Card>
        ))}
      </div>
    );

    startBtn = <></>;
    resultBtn = (
      <Button onClick={() => setResultFlag(true)}>Show Results</Button>
    );
  } else {
    startBtn = <Button onClick={handleStart}>Start Quiz</Button>;
    resultBtn = <></>;
  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {!resultFlag ? (
        <>
          {qCards}
          {startBtn}
          {resultBtn}
        </>
      ) : null}
      {resultFlag && (
        <Banner handleStart={handleStart} score={questionsCorrect} />
      )}
    </div>
  );
}

export default App;
