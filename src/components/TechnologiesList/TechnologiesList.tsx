import React from 'react';
import styles from './TechnologiesList.module.scss'
import Go from '../../assets/image/icon-go.svg'

const TechnologiesList = () => {
    const technologies = [
        {
            area: 'Backend',
            stack: [
                {
                    name: 'Go',
                    image: Go
                }
            ]
        }
    ]
    return (
        <section className={styles.technologies}>
            <h1 className={styles.technologiesHeader}>Все технологии</h1>
            <div className={styles.technologiesList}>
                {
                    technologies.map((el, idx) => (
                        <div key={idx}>
                            {el.area}
                            {
                                el.stack.map((item, idx) => (
                                    <div key={idx}>
                                        {item.name}
                                        <div className={styles.icon}>
                                            <img src={item.image} alt={item.name}/>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default TechnologiesList
