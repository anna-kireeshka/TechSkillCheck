import { useEffect, useState, useContext } from "react";
import { Page, Container } from "../UI/index";
import { getQuiz, getOptionId } from "../../store/quiz";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, fetchNextQuiz } from "../../store/quiz";
import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../contexts/lang-context";

import "./Quiz.scss";

const Quiz = () => {
  const [technologyId, setTechnologyId] = useState(0);
  const { lang } = useContext(LangContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.split("/");
    const id = Number(pathname[pathname.length - 1]);
    setTechnologyId(id);
  }, []);

  useEffect(() => {
    if (technologyId > 0) {
      const params = { id: technologyId, lang: lang };
      dispatch<any>(fetchQuiz(params));
    }
  }, [technologyId, lang]);

  const quiz = useSelector(getQuiz);
  const { current, total, question } = quiz;

  const getWidthProgressBar = (current: number) => {
    return `${current * 10}%`;
  };

  const updatedOptionId = useSelector(getOptionId);

  const onNextQuestion = () => {
    const query = {
      quiz_id: quiz.id,
      question_id: question.id,
      option_id: updatedOptionId,
      lang: lang,
    };
    dispatch<any>(fetchNextQuiz(query));

    if (current === 10) {
      navigate(`/quiz/result/${quiz.id}`);
    }
  };

  return (
    <>
      <Page>
        <Container>
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
            <QuizCard quiz={quiz} onNextQuestion={onNextQuestion} />
          </div>
        </Container>
      </Page>
    </>
  );
};

export default Quiz;
