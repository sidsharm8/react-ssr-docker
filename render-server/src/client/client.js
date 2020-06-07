// startup point for the client side application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import {renderRoutes } from "react-router-config";
import Routes from "./Routes";

ReactDOM.hydrate(
  <Provider store={store}>
		<BrowserRouter>
		 <div>{renderRoutes(Routes)}</div>
		 </BrowserRouter>
	 </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
