import React from 'react';
import Box from "@mui/material/Box";
import TechnologiesList from "../components/TechnologiesList/TechnologiesList";

const TechnologiesPage = () => {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <TechnologiesList />
            </Box>
    );
};

export default TechnologiesPage;
