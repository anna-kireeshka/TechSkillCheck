import React, {useEffect} from 'react';
import styles from './Directions.module.scss'
import Page from "../UI/Page/Page"

import DirectionsList from "../DirectionsList/DirectionsList";
import { getDirections, fetchDirections } from "../../store/directions";
import { useSelector, useDispatch } from 'react-redux';
const Directions = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(fetchDirections())
    }, []);

    const directions = useSelector(getDirections)

    return (
        <Page>
        <section className={styles.direction}>
            <h1 className={styles.directionHeading}>Направления</h1>
            <div className={styles.directionContainerColumn}>
                <h2 className={styles.directionSubHeading}>Выберите направление</h2>
                <DirectionsList directionList={directions}/>
            </div>
        </section>
        </Page>
    )
}

export default Directions
