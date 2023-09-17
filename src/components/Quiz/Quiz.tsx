import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {fetchNextQuiz, getOptionId} from "../../store/quiz";

import QuizCard from "./QuizCard";
import Container from "../UI/Layout/Container/Container";
import Page from "../UI/Layout/Page/Page";

import {getUrlId} from "../../shared/helpers/transform";
import {QuizDTO} from "../../shared/types/types";

import "./Quiz.scss";

interface Props {
    quiz: QuizDTO;
    lang: string;
}

const Quiz: FC<Props> = ({quiz, lang}) => {
    const {t} = useTranslation()
    const [technologyId, setTechnologyId] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {current, total, question} = quiz;
    const updatedOptionId = useSelector(getOptionId);

    const getWidthProgressBar = (current: number) => {
        return `${current * 10}%`;
    };

    useEffect(() => {
        const id = getUrlId(location.pathname)
        console.log(quiz)
    }, [quiz, lang]);
    const onNextQuestion = () => {
        const query = {
            quiz_id: quiz.id,
            question_id: question?.id ?? 0,
            option_id: updatedOptionId,
            lang: lang,
        }
        dispatch<any>(fetchNextQuiz(query));
        if (current === 10) {
            setTimeout(() => navigate(`/quiz/result/${quiz.id}`), 100);
        }
    }

    return (
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
                            style={{width: getWidthProgressBar(current)}}
                        ></div>
                    </div>
                    <QuizCard quiz={quiz} onNextQuestion={onNextQuestion}/>
                </div>
                )
            </Container>
        </Page>
    );
};

export default Quiz;
