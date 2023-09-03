import { useState } from "react";
import {
  DirectionsPage,
  TechnologiesPage,
  QuizPage,
  QuizResultPage,
} from "./pages/index";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./contexts/theme-context";

function AnimatedRoutes() {
  const location = useLocation();
  const timeout = { enter: 800, exit: 400 };

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        classNames="route-animation"
        timeout={timeout}
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/directions" />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/technologies/:id" element={<TechnologiesPage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/quiz/result/:id" element={<QuizResultPage />}></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="layout">
          <Header />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
