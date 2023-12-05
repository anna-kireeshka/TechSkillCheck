import React, {memo} from 'react';
import {useTranslation} from "react-i18next";

import QuizResult from "components/QuizResult/QuizResult";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Page from "components/UI/Layout/Page/Page";
import {useSelector} from "react-redux";
import {getDirectionsId} from "../store/directions";


const QuizResultPage = memo(() => {
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
            <QuizResult title={t("resultTitle")} directionId={directionId}/>
        </Page>
    );
});

export default QuizResultPage;
