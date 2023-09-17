import React, {FC, useEffect, useState} from "react";
import {Container, Page} from "../UI/index";
import {fetchNextQuiz, getOptionId} from "../../store/quiz";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {QuizDTO} from "../../shared/types/types";
import QuizCard from "./QuizCard";
import "./Quiz.scss";
import NotFound from "../UI/NotFound/NotFound";
import {useTranslation} from "react-i18next";
import NotFotFound from "../../assets/image/notFound.svg";
import {getUrlId} from "../../shared/helpers/transform";

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
            navigate(`/quiz/result/${quiz.id}`);
        }
    };

    return (
        <Page>
            <Container>
                {question !== undefined ? (
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
                ) : (
                    <NotFound
                        page={`technologies/${technologyId}}`}
                        linkTitle={t("redirectLinkToTechnologies")}
                        title={t("redirectLinkToTechnologies")}
                        image={NotFotFound}
                    />
                )}

            </Container>
        </Page>
    );
};

export default Quiz;
