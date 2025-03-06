import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";

const domRoot = document.getElementById("root");
const reactRoot = createRoot(domRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// createRoot.render(document.getElementById("root")).render(
//   <StrictMode>
//     <App/>
//   </StrictMode>
// )
