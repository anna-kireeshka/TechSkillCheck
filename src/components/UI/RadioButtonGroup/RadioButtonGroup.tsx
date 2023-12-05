import React, {FC} from "react";
import DOMPurify from "dompurify";

import CodeSyntaxHighlighter from "components/UI/CodeSyntaxHighlighter/CodeSyntaxHighlighter";

import './RadioButtonGroup.scss'


interface QuestionList {
    id: number;
    text?: string;
    code?: string;
    image?: string;
}

interface Props {
    list: QuestionList[];
    onSetAnswer: (value: string | number) => void
}

const RadioButtonGroup: FC<Props> = ({list, onSetAnswer}) => {
    return (
        <div className="formGroup">
            {list &&
                list.map((el: QuestionList) => (
                    <div key={el.id}>
                        <input
                            className="formGroupInput"
                            type="radio"
                            id={`${el.id}`}
                            name="radio"
                            value={el.text}
                            onChange={() => onSetAnswer(el.id)}
                        />
                        {el.code ? (
                            <label className="formGroupLabel" htmlFor={`${el.id}`}>
                                <CodeSyntaxHighlighter code={el.code}/>
                            </label>
                        ) : (
                            <label
                                className="formGroupLabel"
                                htmlFor={`${el.id}`}
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
