import React, {useEffect} from 'react';
import styles from './TechnologiesList.module.scss'
import Card from "../UI/Card/Card";
import { useSelector, useDispatch } from 'react-redux';
import {getTechnologies, fetchTechnologies} from '../../store/technologies'
import {Technologies} from "../../types";
import Page from "../UI/Page/Page"

const TechnologiesList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch<any>(fetchTechnologies())
    }, []);

    const technologies = useSelector(getTechnologies)

    return (
        <Page>
            <div className={styles.technologies}>
                <h1 className={styles.technologiesHeader}>Все технологии</h1>
                <div className={styles.technologiesColumn}>
                    <h2 className={styles.technologiesSubHeading}>Выберите технологию</h2>
                    <div className={styles.technologiesList}>
                        {
                            technologies.map((el: Technologies) => (
                                <Card key={el.id} to='/test' className='technologiesCard'>
                                    <div key={el.id} className={styles.technologiesContent}>
                                        <h3 className={styles.technologiesContentLang}>{el.lang}</h3>
                                        <div className={styles.icon}>
                                            <img src={el.image} alt={el.lang}/>
                                        </div>
                                    </div>
                                    <div className={styles.technologiesLine}></div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Page>
    )
}
export default TechnologiesList
