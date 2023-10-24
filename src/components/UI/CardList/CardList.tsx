import {FC} from "react";
import cx from "classnames";

import {DirectionsDTO, TechnologiesDTO} from "shared/types/types";

import Card from "components/UI/Card/Card";

import "./CardList.scss";

export interface Props {
    directionList: DirectionsDTO | TechnologiesDTO;
    page: "technologies" | "directions";
}

const CardList: FC<Props> = ({directionList, page}) => {
    const header = cx([
        {
            cardHeadingDirections: page === "directions",
            cardHeadingTechnologies: page === "technologies",
        },
    ]);
    const imageStyle = cx([
        {
            cardImageDirections: page === "directions",
            cardImageTechnologies: page === "technologies",
        },
    ]);

    const totalCard = directionList.total === 2;
    const grid = cx([
        "directionContainer",
        {
            "directionContainer-2": totalCard,
        },
    ]);

    const goTo = page === "technologies" ? "/quiz" : "/technologies";
    return (
        <div className={grid}>
            {Array.isArray(directionList.items) &&
                directionList.items.map((item) => (
                    <Card key={item.id} to={goTo} page={page} id={item.id}>
                        <h3 className={header}>{item?.name}</h3>
                        <div className={imageStyle}>
                            {item.image_url && <img
                                src={`${item.image_url ?? ""}`}
                                alt="Icon"
                            />
                            }
                        </div>
                    </Card>
                ))}
        </div>
    );
};

export default CardList;
