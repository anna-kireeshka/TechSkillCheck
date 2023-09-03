import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import "./Card.scss";

interface Props {
  children: ReactNode;
  to: string;
  page: "technologies" | "directions";
  id: number;
}

const Card: FC<Props> = ({ children, to, id, page }) => {
  const card = cx([
    "card",
    {
      card_directions: page === "directions",
      card_technologies: page === "technologies",
    },
  ]);

  return (
    <NavLink className={card} to={`${to}/${id}`}>
      {children}
    </NavLink>
  );
};

export default Card;
