import React, {memo, useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {LangContext} from "contexts/lang-context";

import {fetchDirections, getDirections, getDirectionsStatus} from "store/directions";

import Directions from "components/Directions/Directions";
import NotFound from "components/UI/NotFound/NotFound";
import Page from "components/UI/Layout/Page/Page";

const DirectionsPage = memo(() => {
    const {t} = useTranslation();
    const {lang} = useContext(LangContext);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(fetchDirections(lang));
    }, [lang]);

    const isLoading = useSelector(getDirectionsStatus)

    const directions = useSelector(getDirections);

    return (
        <Page>
            {
                isLoading === 'loading' ?
                    (
                        <Directions
                            title={t("directionTitle")}
                            subTitle={t("directionSubTitle")}
                            directions={directions}/>
                    ) : (
                        <NotFound
                            page={``}
                            linkTitle={''}
                            title={t("directionsNotFound")}
                            image={"section"}
                        />
                    )
            }

        </Page>
    );
});

export default DirectionsPage;
