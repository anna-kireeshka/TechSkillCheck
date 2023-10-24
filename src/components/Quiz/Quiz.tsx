import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {fetchNextQuiz, getOptionId, setAnswer} from "store/quiz";
import {QuizDTO} from "shared/types/types";

import QuizCard from "components/QuizCard/QuizCard";
import ContainerCenter from "components/UI/Layout/ContainerCenter/ContainerCenter";

import "./Quiz.scss";

interface Props {
    quiz: QuizDTO;
    lang: string;
}

const Quiz: FC<Props> = ({quiz, lang}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {current, total, question} = quiz;
    const updatedOptionId = useSelector(getOptionId);

    const getWidthProgressBar = (current: number) => {
        return `${current * 10}%`;
    };

    useEffect(() => {
    }, [quiz, lang]);
    const onNextQuestion = () => {
        const query = {
            quiz_id: quiz.id,
            question_id: question?.id ?? 0,
            option_id: updatedOptionId,
            lang: lang,
        }
        dispatch<any>(fetchNextQuiz(query));
        dispatch<any>(setAnswer(0));
        if (current === 10) {
            setTimeout(() => navigate(`/quiz/result/${quiz.id}`), 100);
        }
    }

    return (
        <ContainerCenter>
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
                <QuizCard quiz={quiz} onNextQuestion={onNextQuestion} updatedOptionId={updatedOptionId}/>
            </div>
            )
        </ContainerCenter>
    );
};

export default Quiz;
