import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import Login from "./components/Login";
import { AuthController, useUserContext } from "./contexts/user";
import AuthenticatedApp from "./components/AuthenticatedApp";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    color: #212529;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
        <AuthController>
          <AuthOrLogin />
        </AuthController>
    </Router>
  );
}

const AuthOrLogin = () => {
  const user = useUserContext();

  return user.email ? <AuthenticatedApp /> : <Login />;
};

export default App;
