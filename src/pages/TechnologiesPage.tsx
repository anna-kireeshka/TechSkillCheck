import React, {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {LangContext} from "contexts/lang-context";
import {fetchTechnologies, getTechnologies, getTechnologiesStatus} from "store/technologies";
import {getUrlId} from "shared/helpers/transform";

import TechnologiesList from "components/TechnologiesList/TechnologiesList";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import NotFound from "components/UI/NotFound/NotFound";
import Page from "components/UI/Layout/Page/Page";

const TechnologiesPage = () => {
    const {t} = useTranslation();
    const {lang} = useContext(LangContext);
    const location = useLocation();

    const dispatch = useDispatch();

    const [directionId, setDirectionId] = useState(0);
    const isLoading = useSelector(getTechnologiesStatus)

    useEffect(() => {
        const id = getUrlId(location.pathname)
        setDirectionId(id);
    }, []);

    useEffect(() => {
        if (directionId > 0) {
            const params = {id: directionId, lang: lang};
            dispatch<any>(fetchTechnologies(params));
        }
    }, [directionId, lang]);

    const technologies = useSelector(getTechnologies);
    const links = [
        {link: '/', name: t("directionTitle"), isActive: true},
        {link: '', name: t("technologyTitle"), isActive: false}
    ]

    return (
        <Page>
            <Breadcrumbs links={links}/>
            {
                isLoading === 'loading' ? (
                    <>
                        <TechnologiesList
                            title={t("technologyTitle")}
                            subTitle={t("technologySubTitle")}
                            technologies={technologies}
                        />
                    </>
                ) : (
                    <NotFound
                        page={"directions"}
                        linkTitle={t("redirectLinkToDirection")}
                        image={"section"}
                        title={t("notFoundSection")}/>
                )
            }
        </Page>
    );
};

export default TechnologiesPage;
