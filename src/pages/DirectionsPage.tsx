import React from 'react';
import Header from "../components/Header/Header";
import Box from "@mui/material/Box";
import Directions from "../components/Directions/Directions";

const DirectionsPage = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Header/>
                <Directions />
            </Box>
        </Box>
    );
};

export default DirectionsPage;
