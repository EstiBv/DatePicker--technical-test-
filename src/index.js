import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Portal from "./components/Portal";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Portal /> */}
  </React.StrictMode>,
  document.getElementById("root")
  // document.getElementById("portal")
);

reportWebVitals();
