import React, {useState, useContext, useMemo, useEffect} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import styles from './Header.module.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Page from "../UI/Layout/Page/Page";
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../contexts/theme-context';
import { LangContext } from '../../contexts/lang-context';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {getDesignTokens} from "../../shared/mui-theme"



const Header = () => {
    const { i18n, t } = useTranslation();
    const { lang, setLang } = useContext(LangContext)
    const { theme, setTheme } = useContext(ThemeContext);

    const changeLang = () => {
        const isCurrentLang = lang === 'ru'
        console.log(isCurrentLang)
        setLang(lang === 'ru' ? 'en' : 'ru')
    }

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
        <Page>
            <ThemeProvider theme={muiTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static"
                        color='primary'
                        sx={{ bgcolor: "transparent", color: "#334366", boxShadow: "none", borderBottom: 1, borderColor: muiTheme.palette.primary.dark }}>
                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ flexGrow: 1 }}
                        >
                            <a href="/" className={styles.headerLink}> <Typography variant="body1"  sx={{ color: `${muiTheme.palette.primary.dark}` }}>{t("about")}</Typography> </a>
                            <Stack direction="row">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="primary"
                                    aria-label="theme"
                                    sx={{ mr: 2 }}
                                    onClick={() => changeTheme()}
                                    className={styles.headerBtn}
                                >
                                    {
                                        theme === 'light' ?  <WbSunnyIcon /> : <DarkModeIcon />
                                    }

                                </IconButton>
                                <Button color="primary" className={styles.headerBtn} onClick={() => changeLang()}>{lang}</Button>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
            </ThemeProvider>
        </Page>
    )
}
export default Header
