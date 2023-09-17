import React, {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {LangContext} from "../contexts/lang-context";

import {fetchTechnologies, getTechnologies} from "../store/technologies";

import Box from "@mui/material/Box";
import TechnologiesList from "../components/TechnologiesList/TechnologiesList";
import Breadcrumbs from "../components/UI/Breadcrumbs/Breadcrumbs";
import {getUrlId} from "../shared/helpers/transform";

const TechnologiesPage = () => {
    const {t} = useTranslation();
    const {lang} = useContext(LangContext);
    const location = useLocation();

    const dispatch = useDispatch();

    const [directionId, setDirectionId] = useState(0);

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
        <Box sx={{flexGrow: 1}}>
            <Breadcrumbs links={links}/>
            {technologies.total > 1 && <h1>{t("technologyTitle")}</h1>}
            <TechnologiesList
                title={t("technologySubTitle")}
                technologies={technologies}
            />
        </Box>
    );
};

export default TechnologiesPage;
