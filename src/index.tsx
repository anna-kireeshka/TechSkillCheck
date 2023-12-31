import React from "react";
import ReactDOM from "react-dom/client";
import {store} from "./store/store";
import {Provider} from "react-redux";
import App from "./App";
import './shared/i18n';
import 'assets/index.scss'

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
