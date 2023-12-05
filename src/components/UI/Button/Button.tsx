import React, {FC, ReactNode} from "react";

import styles from "./Button.module.scss"

interface Props {
    children: ReactNode;
    onClickButton?: (event: any) => void;
    isDisabled?: boolean;
}

const Button: FC<Props> = ({children, onClickButton, isDisabled = false}) => {
    return (
        <button className={`${styles.button} ${isDisabled ? styles.buttonDisabled : ""}`} type="button"
                onClick={onClickButton} disabled={isDisabled}>
            {children}
        </button>
    );
};

export default Button;
