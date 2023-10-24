import React, {memo, useContext} from 'react';
import {useTranslation} from "react-i18next";

import {ThemeContext} from 'contexts/theme-context';

import QuizResult from "components/QuizResult/QuizResult";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Page from "components/UI/Layout/Page/Page";
import {useSelector} from "react-redux";
import {getDirectionsId} from "../store/directions";


const QuizResultPage = memo(() => {
    const theme = useContext(ThemeContext);
    const {t} = useTranslation()
    const directionId = useSelector(getDirectionsId)
    const links = [
        {link: '/', name: t("directionTitle"), isActive: true},
        {link: `/technologies/${directionId}`, name: t("technologyTitle"), isActive: true},
        {link: '', name: t("resultTitle"), isActive: false}
    ]
    return (
        <Page>
            <Breadcrumbs links={links}/>
            <div className={`${theme.theme}`}>
                <QuizResult title={t("resultTitle")} directionId={directionId}/>
            </div>
        </Page>
    );
});

export default QuizResultPage;