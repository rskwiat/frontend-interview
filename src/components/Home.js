import * as React from "react";
import styled from 'styled-components';

import { useUserContext } from "../contexts/user";

const Container = styled.main`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;

  h1 {
    margin: 4rem 0 2rem;
    font-family: sans-serif;
  }
`;

const Home = () => {
  const user = useUserContext();
  return (
    <Container>
      <h1>Welcome {user.name}</h1>
    </Container>
  );
};

export default Home;
