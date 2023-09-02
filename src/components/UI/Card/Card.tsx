import React, {FC, ReactNode} from 'react';
import "./Card.scss";
import { NavLink } from "react-router-dom";
import cx from "classnames";

interface Props {
    children: ReactNode;
    to: string;
    className?: string;
    page: 'technologies' | 'directions'
}

const Card: FC<Props> = ({ children, to, className='', page }) => {
    const card = cx(['card', {
        'card_directions': page === 'directions',
        'card_technologies': page === 'technologies'
    }])
    return (
        <NavLink className={card} to={to}>
            {children}
        </NavLink>
    )
}

export default Card;
