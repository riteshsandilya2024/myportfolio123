/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App/>, document.getElementById("app"));
