import React, {memo, useContext, useEffect, useMemo} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Page from "../UI/Layout/Page/Page";
import {useTranslation} from "react-i18next";
import {ThemeContext} from '../../contexts/theme-context';
import {LangContext} from '../../contexts/lang-context';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {getDesignTokens} from "../../shared/mui-theme"
import SupportWidget from "../UI/SupportWidget/SupportWidget";
import "./Header.scss";


const Header = memo(() => {
    const {i18n, t} = useTranslation();
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
        <Page>
            <ThemeProvider theme={muiTheme}>
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static"
                            color='primary'
                            sx={{
                                bgcolor: "transparent",
                                color: "#334366",
                                boxShadow: "none",
                                borderBottom: 1,
                                borderColor: muiTheme.palette.primary.dark,
                            }}>
                        <Toolbar sx={{padding: 0}}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{flexGrow: 1}}
                            >
                                <SupportWidget/>
                                <Stack direction="row">
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="primary"
                                        aria-label="theme"
                                        sx={{mr: 2}}
                                        onClick={() => changeTheme()}
                                        className="header_btn"
                                    >
                                        {
                                            theme === 'light' ? <WbSunnyIcon/> : <DarkModeIcon/>
                                        }

                                    </IconButton>
                                    <Button sx={{mr: 2}} color="primary" className="header_btn"
                                            onClick={() => changeLang()}>{lang}</Button>
                                </Stack>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        </Page>
    )
})
export default Header
