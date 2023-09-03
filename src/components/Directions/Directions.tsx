import {useEffect} from 'react';
import { Page, CardList } from "../UI/index"
import { getDirections, fetchDirections } from "../../store/directions";
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import './Directions.scss'

const Directions = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(fetchDirections('ru'))
    }, []);

    const directions = useSelector(getDirections)

    return (
        <Page>
            <div className="direction">
                <div className="direction_column">
                    <h2 className="direction_sub_heading">{t("directionSubTitle")}</h2>
                    <CardList directionList={directions} page={'directions'}/>
                </div>
            </div>
        </Page>
    )
}

export default Directions
