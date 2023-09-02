import React from 'react';
import Box from "@mui/material/Box";
import Quiz from "../components/Quiz/Quiz";

const QuizPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Quiz />
        </Box>
    );
};

export default QuizPage;
