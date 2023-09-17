import {FC} from "react";
import {CardList, Page} from "../UI/index";
import {TechnologiesDTO} from "../../shared/types/types";

import styles from "./TechnologiesList.module.scss";
import {useTranslation} from "react-i18next";

interface Props {
    title: string;
    technologies: TechnologiesDTO;
}

const TechnologiesList: FC<Props> = ({title, technologies}) => {
    const {t} = useTranslation();
    return (
        <Page>
            <div className={styles.technologies}>
                <div className={styles.technologiesColumn}>
                    <h2 className={styles.technologiesSubHeading}>{title}</h2>
                    <CardList directionList={technologies} page={"technologies"}/>
                </div>
            </div>
        </Page>
    );
};
export default TechnologiesList;
