import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/assets/css/style1.css";
import "../src/assets/css/style-2.css";
import "../src/assets/css/style_rtl.css";
import "../src/assets/css/vendors_css.css";
import "../src/assets/css/skin_color.css";
import "../src/assets/css/color_theme.css";
import "../src/assets/css/bootstrap.min.css";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
