import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { injectHtml } from "./utils/inject-html.ts";
import { HTML_PREVIEW_SNIPPET } from "./snippets.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

const init = () => {
    injectHtml(HTML_PREVIEW_SNIPPET);
};

init();
