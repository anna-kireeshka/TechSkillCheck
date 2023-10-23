import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {store} from "./store/store";
import {Provider} from "react-redux";
import App from "./App";
import '../src/shared/i18n';

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
