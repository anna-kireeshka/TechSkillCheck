import React, {useEffect, useState} from 'react'
import Page from '../UI/Page/Page'
import styles from './Quiz.module.scss'
import {getQuiz} from "../../store/quiz";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuiz} from "../../store/quiz";

const Quiz = () => {
    const [labelBtn, setLabelBtn] = useState('Дальше')
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState('1')
    const totalQuestions = 10;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch<any>(fetchQuiz())
    }, []);
    const directions = useSelector(getQuiz)
    return (
        <Page>
            <div className={styles.test}>
                <div className={styles.testContainer}>
                    <div className={styles.testProgress}>
                        <div className={styles.testProgressBar} style={{ width: '20%' }}></div>
                    </div>
                    <div className={styles.testCard}>
                        <div className={styles.testQuestion}>
                            <p className={styles.testQuestionTitle}>Какой хук жизненного цикла Vue 3 используется для выполнения кода перед удалением компонента?</p>
                        </div>
                        <div className={styles.testAnswerList}>
                            <div className={ styles.testAnswerListItem }>
                                <input type="radio" className={styles.radio}/>
                                <label htmlFor=""  className={styles.radioLabel}>beforeUnmount()</label>
                            </div>
                            <div className={ styles.testAnswerListItem }>
                                <input type="radio"/>
                                <label htmlFor="">beforeUnmount()</label>
                            </div>
                            <div className={ styles.testAnswerListItem }>
                                <input type="radio"/>
                                <label htmlFor="">beforeUnmount()</label>
                            </div>
                            <div className={ styles.testAnswerListItem }>
                                <input type="radio"/>
                                <label htmlFor="">beforeUnmount()</label>
                            </div>
                        </div>
                        <button className={styles.testButton}>{labelBtn}</button>
                    </div>
                </div>
            </div>
        </Page>
    )

}

export default Quiz;
