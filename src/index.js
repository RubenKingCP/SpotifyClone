import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import "./App.scss";

const node = document.getElementById("app");
const root = createRoot(node);
root.render(
    <App />
)
