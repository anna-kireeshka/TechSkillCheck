import React, {FC, ReactNode} from 'react';
import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";

interface Props {
    children: ReactNode;
    to: string;
    className?: string
}

const Card: FC<Props> = ({ children, to, className='' }) => {
    return (
        <NavLink className={`${styles.card} ${styles[className]}`} to={to}>
            {children}
        </NavLink>
    )
}

export default Card;
