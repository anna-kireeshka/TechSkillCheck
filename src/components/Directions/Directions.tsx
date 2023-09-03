import React, {useEffect} from 'react';
import './Directions.scss'
import Page from "../UI/Page/Page"

import CardList from '../UI/CardList/CardList'
import { getDirections, fetchDirections } from "../../store/directions";
import { useSelector, useDispatch } from 'react-redux';
const Directions = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(fetchDirections('ru'))
    }, []);

    const directions = useSelector(getDirections)

    return (
        <Page>
            <div className="direction">
                <div className="direction_column">
                    <h2 className="direction_sub_heading">Выберите направление</h2>
                    <CardList directionList={directions} page={'directions'}/>
                </div>
            </div>
        </Page>
    )
}

export default Directions
