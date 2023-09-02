import React from 'react';
import Box from "@mui/material/Box";
import Directions from "../components/Directions/Directions";

const DirectionsPage = () => {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <h1 className="card-heading">Направления</h1>
                <Directions />
            </Box>
    );
};

export default DirectionsPage;
