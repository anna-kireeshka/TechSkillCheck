import React, {memo, useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {LangContext} from "contexts/lang-context";
import {ThemeContext} from "contexts/theme-context";
import {fetchQuiz, getLoadingStatus, getQuiz} from "store/quiz";
import {getDirectionsId} from "store/directions"
import {getUrlId} from "shared/helpers/transform";

import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Quiz from "components/Quiz/Quiz";
import NotFound from "components/UI/NotFound/NotFound";
import Page from "components/UI/Layout/Page/Page";

const QuizPage = memo(() => {
    const dispatch = useDispatch();
    const {t} = useTranslation()
    const {theme} = useContext(ThemeContext);
    const {lang} = useContext(LangContext);
    const location = useLocation();
    const LoadingStatus = useSelector(getLoadingStatus)
    const directionId = useSelector(getDirectionsId)

    const [technologyId, setTechnologyId] = useState(0);

    useEffect(() => {
        const id = getUrlId(location.pathname)
        setTechnologyId(id);
    }, []);

    useEffect(() => {
        if (technologyId > 0) {
            const params = {id: technologyId, lang: lang};
            dispatch<any>(fetchQuiz(params));
        }
    }, [technologyId, lang]);

    const quiz = useSelector(getQuiz);

    const links = [
        {link: '/', name: t("directionTitle"), isActive: true},
        {link: `/technologies/${directionId}`, name: t("technologyTitle"), isActive: true},
        {link: '', name: t("testTitle"), isActive: false}
    ]

    return (
        <Page>
            <Breadcrumbs links={links}/>
            {
                LoadingStatus === 'loading' ? (
                    <div className={`${theme}`}>
                        <Quiz quiz={quiz} lang={lang}/>
                    </div>
                ) : (
                    <NotFound
                        page={`technologies/${directionId}}`}
                        linkTitle={t("redirectLinkToTechnologies")}
                        title={t("redirectLinkToTechnologies")}
                        image={"section"}
                    />
                )
            }
        </Page>
    );
});


export default QuizPage;
