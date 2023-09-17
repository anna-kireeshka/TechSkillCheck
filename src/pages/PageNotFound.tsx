import React, {memo, useContext} from 'react';
import {useTranslation} from "react-i18next";
import {ThemeContext} from '../contexts/theme-context';

import Box from "@mui/material/Box";
import NotFound from "../components/UI/NotFound/NotFound";
import Page from "../components/UI/Layout/Page/Page";
import Container from "../components/UI/Layout/Container/Container";

import NotFotFound from "../assets/image/notFound404.svg";


const PageNotFound = memo(() => {
    const theme = useContext(ThemeContext);
    const {t} = useTranslation();

    return (
        <Box sx={{flexGrow: 1}}>
            <Page>
                <Container>
                    <div className={`${theme.theme}`}>
                        <NotFound page={""} linkTitle={t("redirectLink")} image={NotFotFound} title={t("notFound")}/>
                    </div>
                </Container>
            </Page>
        </Box>
    );
});

export default PageNotFound;