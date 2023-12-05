import React, {memo} from 'react';
import {useTranslation} from "react-i18next";
import NotFound from "components/UI/NotFound/NotFound";
import ContainerCenter from "components/UI/Layout/ContainerCenter/ContainerCenter";
import Page from "components/UI/Layout/Page/Page";

const PageNotFound = memo(() => {
    const {t} = useTranslation();

    return (
        <Page>
            <ContainerCenter>
                <NotFound page={""} linkTitle={t("redirectLink")} image={"404"} title={t("notFound")}/>
            </ContainerCenter>
        </Page>
    );
});

export default PageNotFound;