import React from "react";
import {renderRoutes } from "react-router-config";

import fetchCurrentUser from "./redux/user/user.actions";


const App = ({ route: { routes } }) => {
  return (
    <div data-testid="app" className="App">
       {renderRoutes(routes)}
    </div>
  );
}

const loadData = ({ dispatch }) => {
  return dispatch(fetchCurrentUser());
}

export default { component: App, loadData };
