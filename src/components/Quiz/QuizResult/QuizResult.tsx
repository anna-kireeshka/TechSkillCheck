import React, { FC, useEffect, useState } from "react";
import { Page, Container, CodeSyntaxHighlighter } from "../../UI/index";
import styles from "./QuizResult.module.scss";
import { getResult } from "../../../store/quiz";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchResultQuiz } from "../../../store/quiz";
import { QuizResultDTO } from "../../../shared/types/types"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Icon from "@mui/material/Icon";

interface QuizResultIconProps {
    correctId: number;
    answerId: number;
    currentId: number
}


const QuizResultIcon:FC<QuizResultIconProps> = ({correctId, answerId, currentId}) => {
    if (correctId === currentId) {
        return (
            <Icon>
                <CheckIcon color="success"/>
            </Icon>
        )
    } else {
        return (
            <Icon>
              <CloseIcon color="error"/>
            </Icon>
        )
    }
}

const QuizResult = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [quizId, setQuizId] = useState(0);

  useEffect(() => {
    if (quizId > 0) {
      const params = { id: quizId, lang: "ru" };
      dispatch<any>(fetchResultQuiz(params));
    }
  }, [quizId]);

  useEffect(() => {
    const pathname = location.pathname.split("/");
    const id = Number(pathname[pathname.length - 1]);
    setQuizId(id);
  }, []);

  const resultQuiz = useSelector(getResult);
  const { result, total, items } = resultQuiz;

  const getBorderColor = (result: QuizResultDTO["items"]) => {
    const options = result.options
    const correctId = result.correct_id
    const answerId = result.answer_id

    let isCorrect = false;
    if (answerId === correctId) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].id === answerId) {
                isCorrect = true
            }
        }
    }
    return isCorrect ? '1px solid #2e7d32' : '1px solid #d32f2f'
}

const getCurrentAnswerColor = (currentId: number, optionId: number) =>{
    if (currentId === optionId) {
        return 800
    }
}

  return (
    <Page>
      <Container>
        <div className={styles.quizResultContainer}>
          <h3 className={styles.quizResultHeading}>
            Вы правильно ответили на {result} из {total} вопросов! Продолжайте
            учиться и вы достигнете ещё больших высот!
          </h3>
          {items && items.map((el: QuizResultDTO["items"], index: number) => (
            <div className={styles.quizResultList} key={index} style={{ border : getBorderColor(el) }}>
              <p className={styles.resultQuestion}>{el.question.text}</p>
              <CodeSyntaxHighlighter code={el.question?.code ?? ""} />
              <div className={styles.resultOptions}>
                {
                    el.options.map((option) => (
                        <div className={styles.resultOptionsItems}  key={option.id}>
                            <QuizResultIcon correctId={el.correct_id} answerId={el.answer_id} currentId={option.id}/>
                            <p className={styles.resultOptionsItemsAnswer} style={{ fontWeight : getCurrentAnswerColor(el.answer_id, option.id) }}>{option.text}</p>
                        </div>
                        
                    ))
                }
              </div>
            </div>
          ))}
          <button className={styles.quizResultButton}>Вернутся к тестам</button>
        </div>
      </Container>
    </Page>
  );
};

export default QuizResult;
