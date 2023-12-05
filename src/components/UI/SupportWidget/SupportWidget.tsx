import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";

import {ThemeProvider} from "@mui/material/styles";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {setLoading} from "store/feedback";
import FeedbackForm from "components/Feedback/FeedbackForm";

import styles from "./SupportWidget.module.scss";

const SupportWidget = ({theme}: any) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isOpenFeedbackForm, setOpenFeedbackForm] = useState(false);
    const openFeedbackForm = () => {
        setOpenFeedbackForm(true);
    };

    const closeFeedbackFormEvent = () => {
        setOpenFeedbackForm(false);
        dispatch<any>(setLoading("idle"));
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.widget}>
                <button className={styles.widgetContainer} onClick={openFeedbackForm}>
                    <SupportAgentIcon
                        sx={{color: theme.palette.primary.light}}
                        fontSize="large"
                    />
                    <p className={styles.widgetContainerText}>{t("widgetSupport")}</p>
                </button>
                <FeedbackForm
                    isShow={isOpenFeedbackForm}
                    closeFeedbackForm={closeFeedbackFormEvent}
                    isOpenForm={isOpenFeedbackForm}
                />
            </div>
        </ThemeProvider>
    );
};

export default SupportWidget;
