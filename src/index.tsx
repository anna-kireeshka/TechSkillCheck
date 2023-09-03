import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./index.scss";
// import reportWebVitals from "./reportWebVitals";
import DirectionsPage from "./pages/DirectionsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import QuizPage from "./pages/QuizPage";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import { ThemeContext } from "./contexts/theme-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function AnimatedRoutes() {
  const location = useLocation();
  console.log(location)
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
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {

  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
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

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
