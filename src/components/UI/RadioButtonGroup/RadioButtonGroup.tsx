import React, { FC } from "react";
import DOMPurify from "dompurify";
import styles from "./RadioButtonGroup.module.scss";
import CodeSyntaxHighlighter from "../CodeSyntaxHighlighter/CodeSyntaxHighlighter";


interface Props {
  list: [
    {
      id: number;
      text?: string;
      code?: string;
      image?: string;
    }
  ];
  onSetAnswer: (value: string | number) => void
}

const RadioButtonGroup: FC<Props> = ({ list, onSetAnswer }) => {
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
              onChange={() => onSetAnswer(el.id)}
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
