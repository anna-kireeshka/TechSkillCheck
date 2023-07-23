import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import DirectionsPage from "./pages/DirectionsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import TestPage from "./pages/TestPage"
import { store } from './store/store'
import { Provider } from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/UI/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="route-animation" timeout={300}>
                <Routes location={location}>
                    <Route path="/directions"  element={ <DirectionsPage /> }/>
                    <Route path="/technologies"  element={ <TechnologiesPage /> }/>
                    <Route path="/test" element={<TestPage />} />
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
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
