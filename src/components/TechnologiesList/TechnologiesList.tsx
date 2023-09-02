import React, {useEffect} from 'react';
import styles from './TechnologiesList.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import {getTechnologies, fetchTechnologies} from '../../store/technologies'
import Page from "../UI/Page/Page"
import CardList from '../UI/CardList/CardList'

const TechnologiesList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch<any>(fetchTechnologies())
    }, []);

    const technologies = useSelector(getTechnologies)

    return (
        <Page>
            <div className={styles.technologies}>
                <div className={styles.technologiesColumn}>
                    <h2 className={styles.technologiesSubHeading}>Выберите технологию</h2>
                    <CardList directionList={technologies} page={'technologies'}/>
                </div>
            </div>
        </Page>
    )
}
export default TechnologiesList
