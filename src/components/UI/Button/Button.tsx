import React, {FC, ReactNode} from "react";
import cx from "classnames";

import "./Button.scss";

interface Props {
    children: ReactNode;
    onClickButton?: (event: any) => void;
    isDisabled?: boolean;
}

const Button: FC<Props> = ({children, onClickButton, isDisabled = false}) => {
    const button = cx([
        "button",
        {
            "button-disabled": isDisabled,
        },
    ]);

    return (
        <button className={button} type="button" onClick={onClickButton} disabled={isDisabled}>
            {children}
        </button>
    );
};

export default Button;
