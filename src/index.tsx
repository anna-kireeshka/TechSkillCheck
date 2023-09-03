import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import { useTranslation, I18nextProvider } from 'react-i18next';
// import i18n from '../src/shared/i18n';
import '../src/shared/i18n';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <I18nextProvider i18n={i18n}> */}
        <App />
      {/* </I18nextProvider> */}
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
