import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import DirectionsPage from "./pages/DirectionsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/"  element={ <DirectionsPage /> }/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
