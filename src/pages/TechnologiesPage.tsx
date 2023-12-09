import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {LangContext} from "contexts/lang-context";
import {fetchTechnologies, getTechnologies, getTechnologiesStatus} from "store/technologies";

import TechnologiesList from "components/TechnologiesList/TechnologiesList";
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import NotFound from "components/UI/NotFound/NotFound";
import Page from "components/UI/Layout/Page/Page";
import {getDirectionsId} from "../store/directions";

const TechnologiesPage = () => {
    const {t} = useTranslation();
    const {lang} = useContext(LangContext);

    const dispatch = useDispatch();
    const status = useSelector(getTechnologiesStatus)
    const technologies = useSelector(getTechnologies);
    const directionId = useSelector(getDirectionsId)

    useEffect(() => {
        dispatch<any>(fetchTechnologies({id: directionId, lang: lang}));
    }, [lang, dispatch]);

    const links = [
        {link: '/', name: t("directionTitle"), isActive: true},
        {link: '', name: t("technologyTitle"), isActive: false}
    ]

    let contentBlock: any = ''
    if (status === 'successfully') {
        contentBlock = <TechnologiesList
            title={t("technologyTitle")}
            subTitle={t("technologySubTitle")}
            technologies={technologies}
        />
    } else if (status === 'failed') {
        contentBlock = <NotFound
            page={"directions"}
            linkTitle={t("redirectLinkToDirection")}
            image={"section"}
            title={t("notFoundSection")}/>
    } else if (status === "pending") {
        contentBlock = <p>Loading...</p>
    }

    return (
        <Page>
            <Breadcrumbs links={links}/>
            {contentBlock}
        </Page>
    );
};

export default TechnologiesPage;
