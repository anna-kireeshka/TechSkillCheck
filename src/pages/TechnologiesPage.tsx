import React from 'react';
import Box from "@mui/material/Box";
import TechnologiesList from "../components/TechnologiesList/TechnologiesList";
import styles from "../components/TechnologiesList/TechnologiesList.module.scss";

const TechnologiesPage = () => {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <h1 className={styles.technologiesHeader}>Все технологии</h1>
                <TechnologiesList />
            </Box>
    );
};

export default TechnologiesPage;
