import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./Style/bookCard.scss";
import "./Style/layout.scss";
import "./Style/main.scss";
import "./Style/searchBar.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
