import React, {memo, useContext} from 'react';
import {useTranslation} from "react-i18next";

import {ThemeContext} from '../contexts/theme-context';

import Box from "@mui/material/Box";
import QuizResult from "../components/Quiz/QuizResult/QuizResult";
import Breadcrumbs from "../components/UI/Breadcrumbs/Breadcrumbs";


const QuizResultPage = memo(() => {
    const theme = useContext(ThemeContext);
    const {t} = useTranslation()
    const links = [
        {link: '/', name: t("directionTitle"), isActive: true},
        {link: '/', name: t("technologyTitle"), isActive: true},
        {link: '', name: t("resultTitle"), isActive: false}
    ]
    return (
        <Box sx={{flexGrow: 1}}>
            <Breadcrumbs links={links}/>
            <div className={`${theme.theme}`}>
                <h1 className="card-heading">{t("resultTitle")}</h1>
                <QuizResult/>
            </div>
        </Box>
    );
});

export default QuizResultPage;