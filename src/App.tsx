import React, {useState} from "react";
import {BrowserRouter, Navigate, Route, Routes, useLocation,} from "react-router-dom";

import {ThemeContext} from "./contexts/theme-context";
import {LangContext} from "./contexts/lang-context";

import Header from "./components/Header/Header";
import DirectionsPage from "./pages/DirectionsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import QuizPage from "./pages/QuizPage";
import QuizResultPage from "./pages/QuizResult";
import PageNotFound from "./pages/PageNotFound";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <Routes location={location}>
            <Route path="/" element={<Navigate to="/directions"/>}/>
            <Route path="/directions" element={<DirectionsPage/>}/>
            <Route path="/technologies/:id" element={<TechnologiesPage/>}/>
            <Route path="/quiz/:id" element={<QuizPage/>}/>
            <Route path="/quiz/result/:id" element={<QuizResultPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}

function App() {
    const isBrowserDefaultLight = () =>
        window.matchMedia("(prefers-color-scheme: light)").matches;

    const getDefaultTheme = (): string => {
        const localStorageTheme = localStorage.getItem("default-theme");
        const browserDefault = isBrowserDefaultLight() ? "light" : "dark";
        return localStorageTheme || browserDefault;
    };

    const [theme, setTheme] = useState(getDefaultTheme());
    const [lang, setLang] = useState("ru");

    return (
        <LangContext.Provider value={{lang, setLang}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div className={`theme-${theme}`}>
                    <div className="layout">
                        <Header/>
                        <BrowserRouter>
                            <AnimatedRoutes/>
                        </BrowserRouter>
                    </div>
                </div>
            </ThemeContext.Provider>
        </LangContext.Provider>
    );
}

export default App;
