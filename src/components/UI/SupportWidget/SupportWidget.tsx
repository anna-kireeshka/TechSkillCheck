import React, { useState, useMemo, useContext } from "react";
import { FeedbackForm } from "../../Feedback/FeedbackForm";
import "./SupportWidget.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { getDesignTokens } from "../../../shared/mui-theme";
import { ThemeContext } from "../../../contexts/theme-context";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const SupportWidget = () => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
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
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="widget-container">
        <button className="widget" onClick={openFeedbackForm}>
          <SupportAgentIcon
            sx={{ color: muiTheme.palette.primary.light }}
            fontSize="large"
          />
          <p className="widget-text">{t("widgetSupport")}</p>
        </button>
        <FeedbackForm
          isShow={isOpenFeedbackForm}
          closeFeedbackForm={closeFeedbackFormEvent}
        />
      </div>
    </ThemeProvider>
  );
};

export default SupportWidget;
