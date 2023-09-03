import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTechnologies, fetchTechnologies } from "../../store/technologies";
import { useLocation } from "react-router-dom";
import { Page, CardList } from "../UI/index";

import styles from "./TechnologiesList.module.scss";

const TechnologiesList = () => {
  let location = useLocation();
  const [directionId, setDirectionId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const pathname = location.pathname.split("/");
    const id = Number(pathname[pathname.length - 1]);
    setDirectionId(id);
  }, []);

  useEffect(() => {
    if (directionId > 0) {
      const params = { id: directionId, lang: "ru" };
      dispatch<any>(fetchTechnologies(params));
    }
  }, [directionId]);

  const technologies = useSelector(getTechnologies);

  return (
    <Page>
      <div className={styles.technologies}>
        <div className={styles.technologiesColumn}>
          <h2 className={styles.technologiesSubHeading}>Выберите технологию</h2>
          <CardList directionList={technologies} page={"technologies"} />
        </div>
      </div>
    </Page>
  );
};
export default TechnologiesList;
