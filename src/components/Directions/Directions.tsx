import {FC} from "react";

import CardList from "components/UI/CardList/CardList"
import Container from "components/UI/Layout/Container/Container";
import ContainerCenter from "components/UI/Layout/ContainerCenter/ContainerCenter";

import {DirectionsDTO} from "shared/types/types";
import "./Directions.scss";

interface Props {
    directions: DirectionsDTO;
    title: string;
    subTitle: string;
}

const Directions: FC<Props> = ({directions, title, subTitle}) => {
    return (
        <Container>
            <h1>{title}</h1>
            <ContainerCenter>
                <div className="direction">
                    <div className="direction_column">
                        <h2 className="direction_sub_heading">{subTitle}</h2>
                        <CardList directionList={directions} page={"directions"}/>
                    </div>
                </div>
            </ContainerCenter>
        </Container>
    );
};

export default Directions;
