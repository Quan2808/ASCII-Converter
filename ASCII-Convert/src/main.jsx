import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/quicksand/500.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function updateFavicon() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const favicon = document.querySelector("link[rel='icon']");

  if (favicon) {
    favicon.href = isDarkMode
      ? "/ASCII-Converter/favicon-light.svg"
      : "/ASCII-Converter/favicon-dark.svg";
  }
}

updateFavicon();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicon);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
