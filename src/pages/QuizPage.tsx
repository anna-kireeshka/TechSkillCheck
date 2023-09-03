import React, {useContext} from 'react';
import Box from "@mui/material/Box";
import Quiz from "../components/Quiz/Quiz";

import { ThemeContext } from '../contexts/theme-context';

const QuizPage = () => {
    const theme = useContext(ThemeContext);
    return (
        <Box sx={{ flexGrow: 1 }} >
            <div className={`${theme.theme}`}>
                <Quiz />
            </div>
        </Box>
    );
};

export default QuizPage;
