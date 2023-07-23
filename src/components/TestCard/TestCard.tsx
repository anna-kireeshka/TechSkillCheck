import React, {useState} from 'react'
import Page from '../UI/Page/Page'
import styles from './TestCard.module.scss'

const TestCard = () => {
    const [labelBtn, setLabelBtn] = useState('Дальше')
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState('1')
    const totalQuestions = 10;
    return (
        <Page>
            <div className={styles.test}>
                <div className={styles.testCard}>
                    <div className={styles.testCounter}>{currentQuestionIndex}/{totalQuestions}</div>
                    <div className={styles.testQuestion}>
                        <p className={styles.testQuestionTitle}>Какой хук жизненного цикла Vue 3 используется для выполнения кода перед удалением компонента?</p>
                    </div>
                    <div className={styles.testAnswerList}>
                        <button className={styles.testAnswerListItem}> beforeUnmount() </button>
                        <button className={styles.testAnswerListItem}> unmounted() </button>
                        <button className={styles.testAnswerListItem}> beforeDestroy() </button>
                        <button className={styles.testAnswerListItem}> destroyed() </button>
                    </div>
                    <button className={styles.testButton}>{labelBtn}</button>
                </div>
            </div>
        </Page>
    )

}

export default TestCard;
