import React, {useState} from 'react';
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
import Page from "../UI/Page/Page"



const Header = () => {
    const [lang, setLang] = useState('ru')
    const [theme, setTheme] = useState('light')
    const changeLang = () => {
        if (lang === 'ru') {
            setLang('eng')
        } else {
            setLang('ru')
        }
    }
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
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
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                            <a href="/" className={styles.headerLink}> О площадке</a>
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
