import React, {memo, useContext, useEffect, useMemo} from 'react';
import {useTranslation} from "react-i18next";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {ThemeContext} from 'contexts/theme-context';
import {LangContext} from 'contexts/lang-context';
import {getDesignTokens} from "shared/mui-theme"

import SupportWidget from "components/UI/SupportWidget/SupportWidget";
import Page from "components/UI/Layout/Page/Page";


const Header = memo(() => {
    const {i18n} = useTranslation();
    const {lang, setLang} = useContext(LangContext)
    const {theme, setTheme} = useContext(ThemeContext);

    const changeLang = () => setLang(lang === 'ru' ? 'en' : 'ru');

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const changeTheme = () => {
        const isCurrentLight = theme === 'light';
        setTheme(isCurrentLight ? 'dark' : 'light');
        localStorage.setItem('default-theme', isCurrentLight ? 'dark' : 'light');
    }
    const muiTheme = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);

    return (
        <ThemeProvider theme={muiTheme}>
            <Page>
                <AppBar position="static"
                        color='primary'
                        sx={{
                            bgcolor: "transparent",
                            color: "#334366",
                            boxShadow: "none",
                            borderBottom: 1,
                            borderColor: muiTheme.palette.primary.dark,
                        }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{flexGrow: 1}}
                    >
                        <SupportWidget theme={muiTheme} lang={lang}/>
                        <Stack direction="row">
                            <IconButton
                                size="large"
                                edge="start"
                                color="primary"
                                aria-label="theme"
                                sx={{ml: 2}}
                                onClick={() => changeTheme()}
                                className="header_btn"
                            >
                                {
                                    theme === 'light' ? <WbSunnyIcon/> : <DarkModeIcon/>
                                }

                            </IconButton>
                            <Button sx={{ml: 2}} color="primary"
                                    onClick={() => changeLang()}>{lang}</Button>
                        </Stack>
                    </Stack>
                </AppBar>
            </Page>
        </ThemeProvider>
    )
})
export default Header
