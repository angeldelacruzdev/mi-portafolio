import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.min.css";
import "./styles.scss";
import PortafolioApp from "./PortafolioApp";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <PortafolioApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
