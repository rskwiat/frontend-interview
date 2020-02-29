import * as React from "react";
import { Link } from "react-router-dom";
import {
  REPOSITORIES_ROUTE,
  PROFILE_ROUTE,
  HOME_ROUTE
} from "../constants/routes";

import styled from 'styled-components';

const routes = [
  {
    label: "Home",
    to: HOME_ROUTE
  },
  {
    label: "Profile",
    to: PROFILE_ROUTE
  },
  {
    label: "Repositories",
    to: REPOSITORIES_ROUTE
  }
];

const NavBar = styled.nav`
  border-bottom: 1px solid #ccc;
  font-size: 1.4rem;


  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;

      a {
        text-decoration: none;
        font-family: sans-serif;
        color: #3498db;
        padding: 1.5rem 2rem;
        display: inline-block;
        line-height: 1;
        &:hover {
          background: #3498db;
          color: #FFF;
        }
      }
    }
  }

`;

const Navigation = () => {
  return (
    <NavBar>
      <ul>
        {routes.map(({ to, label }) => {
          return (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </NavBar>
  );
};


export default Navigation;
