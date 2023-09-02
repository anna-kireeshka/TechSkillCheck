import React, { useEffect, useState, FC } from "react";
import Page from "../UI/Page/Page";
import styles from "./Quiz.module.scss";
import { getQuiz } from "../../store/quiz";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "../../store/quiz";
import RadioButtonGroup from "../UI/RadioButtonGroup/RadioButtonGroup";
import CodeSyntaxHighlighter from "../UI/CodeSyntaxHighlighter/CodeSyntaxHighlighter";

const Quiz = () => {
  const [labelBtn, setLabelBtn] = useState("Дальше");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState("1");
  const totalQuestions = 10;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchQuiz());
  }, []);
  const quiz = useSelector(getQuiz);
  const getWidthProgressBar = (current: number) => {
    return `${current * 10}%`;
  };

  return (
    <Page>
      <div className={styles.test}>
        {quiz.map((item: any) => (
          <div className={styles.testContainer}>
            <div className={styles.testProgressInfo}>
              <p className={styles.testProgressInfoCount}>
                {item.current} / {item.total}
              </p>
            </div>
            <div className={styles.testProgress}>
              <div
                className={styles.testProgressBar}
                style={{ width: getWidthProgressBar(item.current) }}
              ></div>
            </div>
            <div className={styles.testCard} key={item.id}>
              <div className={styles.testQuestion}>
                <p className={styles.testQuestionTitle}>{item.question.text}</p>
                <CodeSyntaxHighlighter code={item.question.code} />
              </div>
              <RadioButtonGroup list={item.options} />
              <button className={styles.testButton}>{labelBtn}</button>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Quiz;
