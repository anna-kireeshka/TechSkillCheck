import React, {useState, useContext} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Page from "../UI/Layout/Page/Page";
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../contexts/theme-context';



const Header = () => {
    const { i18n, t } = useTranslation();
    const [lang, setLang] = useState('ru')
    const { theme, setTheme } = useContext(ThemeContext);
    const changeLang = () => {
        lang === 'ru' ? setLang('en') : setLang('ru')
        i18n.changeLanguage(lang);
    }
    const changeTheme = () => {
        const isCurrentLight = theme === 'light';
        setTheme(isCurrentLight ? 'dark' : 'light');
        localStorage.setItem('default-theme', isCurrentLight ? 'dark' : 'light');
    }
    return (
        <Page>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static"
                        sx={{ bgcolor: "transparent", color: "#334366", boxShadow: "none", borderBottom: 1, borderColor:"#334366" }}>
                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ flexGrow: 1 }}
                        >
                            <a href="/" className={styles.headerLink}> {t("about")} </a>
                            <Stack direction="row">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="theme"
                                    sx={{ mr: 2 }}
                                    onClick={() => changeTheme()}
                                    className={styles.headerBtn}
                                >
                                    {
                                        theme === 'light' ?  <WbSunnyIcon /> : <DarkModeIcon />
                                    }

                                </IconButton>
                                <Button color="inherit" className={styles.headerBtn} onClick={() => changeLang()}>{lang}</Button>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </Page>
    )
}
export default Header
