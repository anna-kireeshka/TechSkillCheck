import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import styles from "./Footer.module.scss";
import Page from "../UI/Layout/Page/Page";
import { useTranslation } from "react-i18next";
import InfoIcon from "@mui/icons-material/Info";
import Icon from "@mui/material/Icon";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Footer = () => {
  const { t } = useTranslation();
  const footerLink = [
    { id: "about", text: t("about"), link: "/", icon: InfoIcon },
    { id: "contacts", text: t("contacts"), link: "/", icon: ContactMailIcon },
    { id: "support", text: t("support"), link: "/", icon: SupportAgentIcon },
  ];
  return (
    <Page>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "transparent",
            color: "#334366",
            boxShadow: "none",
            borderTop: 1,
            borderColor: "#334366",
          }}
        >
          <Toolbar sx={{ padding: 2}}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'start', sm: 'center' }}
              spacing={{ xs: 1, sm: 2, md: 0 }}
              sx={{ flexGrow: 1 }}
            >
              {footerLink.map((el, index) => (
                <div className={styles.headerLink} key={index}>
                  <Icon>{<el.icon></el.icon>}</Icon>
                  <a className={styles.headerLinkText}>{el.text}</a>
                </div>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Page>
  );
};
export default Footer;