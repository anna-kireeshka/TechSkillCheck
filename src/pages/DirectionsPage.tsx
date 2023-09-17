import React, {memo, useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {LangContext} from "../contexts/lang-context";

import {fetchDirections, getDirections} from "../store/directions";

import Directions from "../components/Directions/Directions";
import Box from "@mui/material/Box";

const DirectionsPage = memo(() => {
    const {t} = useTranslation();
    const {lang} = useContext(LangContext);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(fetchDirections(lang));
    }, [lang]);

    const directions = useSelector(getDirections);

    return (
        <Box sx={{flexGrow: 1}}>
            <h1>{t("directionTitle")}</h1>
            <Directions title={t("directionSubTitle")} directions={directions}/>
        </Box>
    );
});

export default DirectionsPage;
