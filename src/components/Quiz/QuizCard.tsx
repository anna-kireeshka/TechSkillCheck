import { FC, useState, useEffect } from "react";
import { RadioButtonGroup, CodeSyntaxHighlighter } from "../UI/index";
import { useDispatch, useSelector } from "react-redux";
import { getOptionId, setAnswer } from "../../store/quiz";
import { fetchNextQuiz } from "../../store/quiz";
import { QuizDTO } from "../../shared/types/types";
import { useTranslation } from "react-i18next";

interface Props {
  quiz: QuizDTO;
  onNextQuestion: () => void;
}
const QuizCard: FC<Props> = ({ quiz, onNextQuestion }) => {
  const { t } = useTranslation();
  const { current, total, question, options } = quiz;
  const [labelBtn, setLabelBtn] = useState(current < 10 ? t("nextQuestion") : t("finishQuiz"));
  const [optionId, setOptionId] = useState<string | number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (optionId) {
      dispatch<any>(setAnswer(optionId));
    }
  }, [optionId]);
;

  const onSetAnswer = (value: string | number) => {
    setOptionId(value);
  };

  return (
    <div className="testCard">
      <div className="testQuestion">
        <p className="testQuestionTitle">{question?.text ?? ""}</p>
        <CodeSyntaxHighlighter code={question?.code ?? ""} />
      </div>
      <RadioButtonGroup list={options} onSetAnswer={onSetAnswer} />
      <button className="testButton" onClick={onNextQuestion}>
        {labelBtn}
      </button>
    </div>
  );
};

export default QuizCard;
