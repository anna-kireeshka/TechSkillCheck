import React from 'react';
import styles from './Directions.module.scss'
import Page from "../UI/Page/Page"

import FrontendIcon from "../../assets/image/icon-frontend.svg";
import QAIcon from "../../assets/image/icon-qa.svg";
import BackendIcon from "../../assets/image/icon-backend.svg"

const Directions = () => {
    return (
        <Page>
        <section className={styles.direction}>
            <h1 className={styles.directionHeading}>Направления</h1>
            <div className={styles.directionContainerColumn}>
            <h2 className={styles.directionSubHeading}>Выберите направление</h2>
                <div className={styles.directionContainer}>
                    <div role="button" className={styles.card}>
                        <h3 className={styles.cardHeading}>Backend-разработка</h3>
                        <div className={styles.cardImage}>
                            <img src={BackendIcon} alt="Icon"/>
                        </div>
                    </div>
                    <div role="button" className={styles.card}>
                        <h3 className={styles.cardHeading}>Frontend-разработка</h3>
                        <div className={styles.cardImage}>
                            <img src={FrontendIcon} alt="Icon"/>
                        </div>
                    </div>
                    <div role="button" className={styles.card}>
                        <h3 className={styles.cardHeading}>Тестирование</h3>
                        <div className={styles.cardImage}>
                            <img src={QAIcon} alt="Icon"/>
                        </div>
                    </div>
                </div>

                </div>
        </section>
        </Page>
    )
}

export default Directions
