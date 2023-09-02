import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import DirectionsPage from "./pages/DirectionsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import QuizPage from "./pages/QuizPage"
import { store } from './store/store'
import { Provider } from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
                    <Route path='/' element={<Navigate to='/directions' />} />
                    <Route path="/directions"  element={ <DirectionsPage /> }/>
                    <Route path="/technologies"  element={ <TechnologiesPage /> }/>
                    <Route path="/quiz" element={<QuizPage />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Header/>
      <BrowserRouter>
          <AnimatedRoutes />
      </BrowserRouter>
          <Footer />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
