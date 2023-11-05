import React, {memo, useContext, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import {getDesignTokens} from "shared/mui-theme";
import {ThemeContext} from "contexts/theme-context";
import {setLoading} from "store/feedback";
import FeedbackForm from "components/Feedback/FeedbackForm";

import "./SupportWidget.scss";

const SupportWidget = memo(() => {
    const {t} = useTranslation();
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();
    const muiTheme = useMemo(
        () => createTheme(getDesignTokens(theme.theme)),
        [theme.theme]
    );

    const [isOpenFeedbackForm, setOpenFeedbackForm] = useState(false);
    const openFeedbackForm = () => {
        setOpenFeedbackForm(true);
    };

    const closeFeedbackFormEvent = () => {
        setOpenFeedbackForm(false);
        dispatch<any>(setLoading("idle"));
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div className="widget-container">
                <button className="widget" onClick={openFeedbackForm}>
                    <SupportAgentIcon
                        sx={{color: muiTheme.palette.primary.light}}
                        fontSize="large"
                    />
                    <p className="widget-text">{t("widgetSupport")}</p>
                </button>
                <FeedbackForm
                    isShow={isOpenFeedbackForm}
                    closeFeedbackForm={closeFeedbackFormEvent}
                    isOpenForm={isOpenFeedbackForm}
                />
            </div>
        </ThemeProvider>
    );
});

export default SupportWidget;
