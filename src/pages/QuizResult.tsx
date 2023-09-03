import React, {useContext} from 'react';
import Box from "@mui/material/Box";
import QuizResult from "../components/Quiz/QuizResult/QuizResult";

import { ThemeContext } from '../contexts/theme-context';

const QuizResultPage = () => {
    const theme = useContext(ThemeContext);
    return (
        <Box sx={{ flexGrow: 1 }} >
            <div className={`${theme.theme}`}>
                <h1 className="card-heading">Результаты</h1>
                <QuizResult/>
            </div>
        </Box>
    );
};

export default QuizResultPage;