import React from "react";
import { Route } from "react-router-dom";
import CharactersPage from "./pages/characters-page/characterspage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import App from "./App";

const Routes = [
    {
      ...App,
      routes: [
        {
          ...HomePage,
          exact: true,
          path: "/"
        },
        {
          ...CharactersPage,
          path: "/characters",
        },
        {
          component: SignInAndSignUpPage,
          path: "/signin",
        }
      ]
    }
];

export default Routes;
