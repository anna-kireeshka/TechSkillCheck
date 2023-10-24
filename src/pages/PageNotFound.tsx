import React, {memo, useContext} from 'react';
import {useTranslation} from "react-i18next";
import {ThemeContext} from 'contexts/theme-context';
import NotFound from "components/UI/NotFound/NotFound";
import ContainerCenter from "components/UI/Layout/ContainerCenter/ContainerCenter";
import Page from "components/UI/Layout/Page/Page";

const PageNotFound = memo(() => {
    const theme = useContext(ThemeContext);
    const {t} = useTranslation();

    return (
        <Page>
            <ContainerCenter>
                <div className={`${theme.theme}`}>
                    <NotFound page={""} linkTitle={t("redirectLink")} image={"404"} title={t("notFound")}/>
                </div>
            </ContainerCenter>
        </Page>
    );
});

export default PageNotFound;