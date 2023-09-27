import React, { FC, ReactNode } from "react";
import "./Button.scss";
import cx from "classnames";

interface Props {
  children: ReactNode;
  onClickButton?: (event: any) => void;
  isDisabled?: boolean;
}

const Button: FC<Props> = ({ children, onClickButton, isDisabled }) => {
  const button = cx([
    "button",
    {
      "button-disabled": isDisabled,
    },
  ]);

  return (
    <button className={button} type="button" onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
