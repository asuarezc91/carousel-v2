import "./config";

import React from "react";
import { render } from "react-dom";

// import { WebMap } from "./components/WebMap";
// import {Header} from "./components/Header"; 
import { App } from './App'

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// if (module.hot) {
//     module.hot.accept()
//   }
  

