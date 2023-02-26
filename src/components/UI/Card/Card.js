import React, { useState } from 'react';
import Button from '../Button/Button';
const Card = ({key,
    question,
    correctAnswerMarkUpdate,
    attempt,
    options,
    answer}) => {
        const [state, setSate] = useState(false);
        function disableBtn()
        {
          correctAnswerMarkUpdate(answer===options.option)
            setSate(true);
        }


        return (
            <div>
            <h4>
                {question}
            </h4>
            <Button onClick={() => disableBtn(options.option)} disabled = {state} >{options.option1}</Button>
            <Button onClick={() => disableBtn(options.option)} disabled = {state} >{options.option2}</Button>
            <Button onClick={() => disableBtn(options.option)} disabled = {state} >{options.option3}</Button>
            <Button onClick={() => disableBtn(options.option)} disabled = {state} >{options.option4}</Button>
            </div>
        )
    }

    export default Card;