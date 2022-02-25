import React from "react";
import ReactDOM from "react-dom";
import Game from "./component/game";
import "./styles/main.scss";
const App = () => (
  <>
    <Game />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
