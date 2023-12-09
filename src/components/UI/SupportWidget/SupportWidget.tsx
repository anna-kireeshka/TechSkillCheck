import React, {FC, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FeedbackForm from "components/Feedback/FeedbackForm";

import styles from "./SupportWidget.module.scss";
import {setLoading} from "../../../store/feedback";

interface Props {
    theme: any,
    lang: string,
}

const SupportWidget: FC<Props> = ({theme, lang}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isOpenFeedbackForm, setOpenFeedbackForm] = useState(false);
    const openFeedbackForm = () => {
        setOpenFeedbackForm(true);
    };

    const closeFeedbackFormEvent = () => {
        setOpenFeedbackForm(false);
        dispatch<any>(setLoading("idle"))
    };

    return (
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
                lang={lang}
            />
        </div>
    );
};

export default SupportWidget;
