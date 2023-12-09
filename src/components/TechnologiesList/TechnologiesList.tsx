import {FC} from "react";

import {TechnologiesDTO} from "shared/types/types";

import CardList from "components/UI/CardList/CardList";
import Container from "components/UI/Layout/Container/Container";
import ContainerCenter from "components/UI/Layout/ContainerCenter/ContainerCenter";
import styles from "./TechnologiesList.module.scss"

interface Props {
    title: string;
    subTitle: string;
    technologies: TechnologiesDTO;
}

const TechnologiesList: FC<Props> = ({title, technologies, subTitle}) => {
    return (
        <Container>
            <h1>{title}</h1>
            <ContainerCenter>
                <div className={styles.technologies}>
                    <div className={styles.technologiesColumn}>
                        <h2>{subTitle}</h2>
                        <CardList directionList={technologies} page={"technologies"}/>
                    </div>
                </div>
            </ContainerCenter>
        </Container>
    );
};
export default TechnologiesList;
