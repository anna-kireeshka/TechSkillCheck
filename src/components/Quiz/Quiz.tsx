import React, { useEffect, useState, FC } from "react";
import Page from "../UI/Page/Page";
import "./Quiz.scss";
import { getOptionId, getQuiz } from "../../store/quiz";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, fetchNextQuiz } from "../../store/quiz";
import RadioButtonGroup from "../UI/RadioButtonGroup/RadioButtonGroup";
import CodeSyntaxHighlighter from "../UI/CodeSyntaxHighlighter/CodeSyntaxHighlighter";

const Quiz = () => {
  const [technologyId, setTechnologyId] = useState(0);
  const dispatch = useDispatch();

  let location = useLocation();
  useEffect(() => {
    const pathname = location.pathname.split('/')
    const id = Number(pathname[pathname.length - 1])
    setTechnologyId(id)
}, []);

  useEffect(() => {
    if (technologyId > 0) {
        const params = {id: technologyId, lang: "ru"}
        dispatch<any>(fetchQuiz(params));
    }
    
  }, [technologyId]);
  const quiz = useSelector(getQuiz);
  const optionId = useSelector(getOptionId)
  const {current, total, question, options} = quiz

  const [labelBtn, setLabelBtn] = useState(total < 10 ? "Дальше" : "Завершить");

  const getWidthProgressBar = (current: number) => {
    return `${current * 10}%`;
  };

  const nextQuestion = () => {
    const query = {quiz_id: quiz.id, question_id: question.id, option_id: optionId}
    dispatch<any>(fetchNextQuiz(query))
  }

  return (
    <Page>
      <div className="test">
          <div className="testContainer">
            <div className="testProgressInfo">
              <p className="testProgressInfoCount">
              {current} / {total}
              </p>
            </div>
            <div className="testProgress">
              <div
                className="testProgressBar"
                style={{ width: getWidthProgressBar(current) }}
              ></div>
            </div>
            <div className="testCard">
              <div className="testQuestion">
                <p className="testQuestionTitle">{question?.text ?? ''}</p>
                <CodeSyntaxHighlighter code={question?.code ?? ''} />
              </div>
              <RadioButtonGroup list={options} />
              <button className="testButton" onClick={nextQuestion}>{labelBtn}</button>
            </div>
          </div>
      </div>
    </Page>
  );
};

export default Quiz;
