import {  FC } from "react";
import { Page, CardList } from "../UI/index";
import { TechnologiesDTO } from "../../shared/types/types";

import styles from "./TechnologiesList.module.scss";
import NotFound from "../UI/NotFound/NotFound";
import {useTranslation} from "react-i18next";
import NotFotFound from "../../assets/image/notFound.svg";

interface Props {
  title: string;
  technologies: TechnologiesDTO;
}

const TechnologiesList:FC<Props> = ({title, technologies}) => {
    const { t } = useTranslation();
  return (
    <Page>
      <div className={styles.technologies}>
      {
        technologies.total > 1 ? (
              <div className={styles.technologiesColumn}>
                <h2 className={styles.technologiesSubHeading}>{title}</h2>
                <CardList directionList={technologies} page={"technologies"} />
              </div>
        ) : (
            <NotFound page={"directions"} linkTitle={t("redirectLinkToDirection")} image={NotFotFound} title={t("notFoundSection")}/>
        )
      }
      </div>
    </Page>
  );
};
export default TechnologiesList;
