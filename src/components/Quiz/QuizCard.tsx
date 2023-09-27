import { FC, useState, useEffect } from "react";
import { RadioButtonGroup, CodeSyntaxHighlighter } from "../UI/index";
import { useDispatch } from "react-redux";
import { setAnswer } from "../../store/quiz";
import { QuizDTO } from "../../shared/types/types";
import { useTranslation } from "react-i18next";
import { Button } from "../UI/index";

interface Props {
  quiz: QuizDTO;
  onNextQuestion: () => void;
}
const QuizCard: FC<Props> = ({ quiz, onNextQuestion }) => {
  const { t } = useTranslation();
  const { current, total, question, options } = quiz;
  const [labelBtn, setLabelBtn] = useState(t("nextQuestion"));
  const [optionId, setOptionId] = useState<string | number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (optionId) {
      dispatch<any>(setAnswer(optionId));
      setLabelBtn(current < total ? t("nextQuestion") : t("finishQuiz"))
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
      <div className="testQuestionAnsewrs">
        <RadioButtonGroup list={options} onSetAnswer={onSetAnswer} />
      </div>
      <Button onClickButton={onNextQuestion}>
        {labelBtn}
      </Button>
    </div>
  );
};

export default QuizCard;
