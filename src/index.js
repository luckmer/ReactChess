import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./css/Global.style";
import Store from "./utils/Store";

ReactDOM.render(
  <Store>
    <GlobalStyle />
    <App />
  </Store>,
  document.getElementById("root")
);

reportWebVitals();
