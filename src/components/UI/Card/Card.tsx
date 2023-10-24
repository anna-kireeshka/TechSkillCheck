import {FC, ReactNode} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {setDirectionsId} from "store/directions";
import cx from "classnames";
import "./Card.scss";

interface Props {
    children: ReactNode;
    to: string;
    page: "technologies" | "directions";
    id: number;
}

const Card: FC<Props> = ({children, to, id, page}) => {
    const dispatch = useDispatch();
    const card = cx([
        "card",
        {
            card_directions: page === "directions",
            card_technologies: page === "technologies",
        },
    ]);

    const setTechnology = (id: number, page: string) => {
        if (page === "directions") {
            dispatch<any>(setDirectionsId(id));
        }
    }
    return (
        <NavLink className={card} to={`${to}/${id}`} onClick={() => setTechnology(id, page)}>
            {children}
        </NavLink>
    );
};

export default Card;
