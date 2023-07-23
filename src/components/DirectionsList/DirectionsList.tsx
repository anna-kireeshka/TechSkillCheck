import React, {FC} from 'react';
import styles from "../Directions/Directions.module.scss";
import Card from "../UI/Card/Card";

interface DirectionList {
    name: string,
    image: string,
    id: number
}
export interface Props {
    directionList: DirectionList[],
}
const DirectionsList:FC<Props> = ({directionList}) => {
    return (
        <div className={styles.directionContainer}>
            {
                directionList.map((el) => (
                        <Card key={el.id} to="/technologies">
                            <h3 className={styles.cardHeading}>{el.name}</h3>
                            <div className={styles.cardImage}>
                                <img src={el.image} alt="Icon"/>
                            </div>
                        </Card>
                ))
            }
        </div>
    )
}

export default DirectionsList;
