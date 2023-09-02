import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import styles from './Footer.module.scss';
import Page from "../Page/Page"



const Footer = () => {
    return (
        <Page>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static"
                        sx={{ bgcolor: "transparent", color: "#334366", boxShadow: "none", borderTop: 1, borderColor:"#334366" }}>
                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ flexGrow: 1 }}
                        >
                            <a href="/" className={styles.headerLink}> О площадке</a>\
                            <a href="/" className={styles.headerLink}> О площадке</a>
                            <a href="/" className={styles.headerLink}> О площадке</a>
                            <a href="/" className={styles.headerLink}> О площадке</a>
                            <a href="/" className={styles.headerLink}> О площадке</a>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </Page>
    )
}
export default Footer
