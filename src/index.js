import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";   // ✅ added
import "./index.css";
import App from "./App";
import { CurrencyProvider } from "./context/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ enables SEO meta tags */}
      <HashRouter>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);