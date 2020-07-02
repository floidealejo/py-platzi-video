import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/styles.scss";
import HolaMundo from "./components/testFiles/HolaMundo";
import * as serviceWorker from "./serviceWorker";
import Button from "./components/testFiles/Button";

ReactDOM.render(
  <React.StrictMode>
    <HolaMundo />
    <Button />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
