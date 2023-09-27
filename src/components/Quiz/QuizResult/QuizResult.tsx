import React, {FC, useContext, useEffect, useState} from "react";
import {CodeSyntaxHighlighter, Container, Page} from "../../UI/index";
import "./QuizResult.scss";
import {fetchResultQuiz, getResult} from "../../../store/quiz";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {QuizResultDTO} from "../../../shared/types/types"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Icon from "@mui/material/Icon";
import {LangContext} from "../../../contexts/lang-context"
import Button from "../../UI/Button/Button";

interface QuizResultIconProps {
    correctId: number;
    answerId: number;
    currentId: number
}


const QuizResultIcon: FC<QuizResultIconProps> = ({correctId, answerId, currentId}) => {
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
    const navigate = useNavigate();
    const {lang} = useContext(LangContext);

    const [quizId, setQuizId] = useState(0);

    useEffect(() => {
        if (quizId > 0) {
            const params = {id: quizId, lang: lang};
            dispatch<any>(fetchResultQuiz(params));
        }
    }, [quizId, lang]);

    useEffect(() => {
        const pathname = location.pathname.split("/");
        const id = Number(pathname[pathname.length - 1]);
        setQuizId(id);
    }, []);

    const resultQuiz = useSelector(getResult);
    const {result, total, items} = resultQuiz;

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

    const getCurrentAnswerColor = (currentId: number, optionId: number) => {
        if (currentId === optionId) {
            return 800
        }
    }

    const getToTest = () => {
        navigate(`/`)
    }

    return (
        <Page>
            <Container>
                <div className="quizResultContainer">
                    <h3 className="quizResultHeading">
                        Вы правильно ответили на {result} из {total} вопросов!
                        <br/>
                        Продолжайте учиться и вы достигнете ещё больших высот!
                    </h3>
                    {items && items.map((el: QuizResultDTO["items"], index: number) => (
                        <div className="quizResultList" key={index} style={{border: getBorderColor(el)}}>
                            <p className="resultQuestion">{el.question.text}</p>
                            <div className="resultQuestionCode">
                                <CodeSyntaxHighlighter code={el.question?.code ?? ""}/>
                            </div>
                            <div className="resultOptions">
                                {
                                    el.options.map((option) => (
                                        <div className="resultOptionsItems" key={option.id}>
                                            <QuizResultIcon correctId={el.correct_id} answerId={el.answer_id}
                                                            currentId={option.id}/>
                                            <p className="resultOptionsItemsAnswer"
                                               style={{fontWeight: getCurrentAnswerColor(el.answer_id, option.id)}}>{option.text}</p>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    ))}
                    <Button onClickButton={getToTest}>Вернутся к тестам</Button>
                </div>
            </Container>
        </Page>
    );
};

export default QuizResult;
