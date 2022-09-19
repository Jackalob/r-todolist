import { createRoot } from "react-dom/client";
import GlobalStyles from "./reset.css.js";
import App from "./App";
import "./index.css";
import "tippy.js/dist/tippy.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);