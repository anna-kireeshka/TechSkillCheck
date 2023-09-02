import React, {FC} from 'react';
import "./CardList.scss";
import Card from "../Card/Card";
import {DirectionsDTO, TechnologiesDTO} from "../../../shared/types/types";
import cx from "classnames";

export interface Props {
    directionList: DirectionsDTO[] | TechnologiesDTO[],
    page: 'technologies' | 'directions',
}
const CardList:FC<Props> = ({directionList, page}) => {

    const header = cx([{
        'cardHeadingDirections': page === 'directions',
        'cardHeadingTechnologies': page === 'technologies',

    }])
    const imageStyle = cx([{
        'cardImageDirections': page === 'directions',
        'cardImageTechnologies': page === 'technologies',
    }])

    const totalCard = directionList.find((el: DirectionsDTO ) => el.total === 2)
    const grid = cx(['directionContainer', {
        'directionContainer-2': totalCard
    }])

    const goTo =  page === 'technologies' ? '/quiz' : '/technologies'
    return (
        <div className={grid}>
            {
                directionList.map((item) => (
                    item.items.map((el) => (
                        <Card key={el.id} to={goTo} page={page}>
                            <h3 className={header}>{el.name}</h3>
                            <div className={imageStyle}>
                                <img src={require(`../../../${el.image_url}`)} alt="Icon"/>
                            </div>
                        </Card>
                    ))
                ))
            }
        </div>
    )
}

export default CardList;
