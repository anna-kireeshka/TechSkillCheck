import {FC} from "react";
import {CardList, Page} from "../UI/index";
import {TechnologiesDTO} from "../../shared/types/types";
import {useTranslation} from "react-i18next";

interface Props {
    title: string;
    technologies: TechnologiesDTO;
}

const TechnologiesList: FC<Props> = ({title, technologies}) => {
    const {t} = useTranslation();
    return (
        <Page>
            <div className="technologies">
                <div className="technologiesColumn">
                    <h2 className="technologiesSubHeading">{title}</h2>
                    <CardList directionList={technologies} page={"technologies"}/>
                </div>
            </div>
        </Page>
    );
};
export default TechnologiesList;
