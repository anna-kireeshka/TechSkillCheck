import React, { FC, useState, useEffect } from "react";
import DOMPurify from "dompurify";
import styles from "./RadioButtonGroup.module.scss";
import CodeSyntaxHighlighter from "../CodeSyntaxHighlighter/CodeSyntaxHighlighter";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from '../../../store/quiz';

interface Props {
  list: [
    {
      id: number;
      text?: string;
      code?: string;
      image?: string;
    }
  ];
}

const RadioButtonGroup: FC<Props> = ({ list }) => {
  const dispatch = useDispatch();
  const [optionId, setOptionId] = useState(0);

  useEffect(() => {
    if (optionId) {
        dispatch<any>(setAnswer(optionId));
    }
  }, [optionId]);

  const setAnswerId = (id: number) => {
    setOptionId(id);
  };

  return (
    <div className={styles.formGroup}>
      {list &&
        list.map((el: any) => (
          <div key={el.id}>
            <input
              className={styles.formGroupInput}
              type="radio"
              id={el.id}
              name="radio"
              value={el.text}
              onChange={() => setAnswerId(el.id)}
            />
            {el.code ? (
              <label className={styles.formGroupLabel} htmlFor={el.id}>
                <CodeSyntaxHighlighter code={el.code} />
              </label>
            ) : (
              <label
                className={styles.formGroupLabel}
                htmlFor={el.id}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(el.text),
                }}
              ></label>
            )}
          </div>
        ))}
    </div>
  );
};
export default RadioButtonGroup;
