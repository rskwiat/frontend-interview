import * as React from "react";
import { useSetUserContext } from "../contexts/user";
import styled from 'styled-components';


const Container = styled.div`
  height: 100%;
  position: relative;
  padding: 0 2rem;
`;

const Panel = styled.div`
  max-width: 50rem;
  border: 1px solid #ccc;
  box-shadow: 0 3px 12px rgba(0,0,0,.1);
  padding: 4rem 2rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 3px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-family: sans-serif;
  margin: 0 0 2rem;
`;

const Fieldset = styled.fieldset`
  padding: 0;
  display: flex;
  flex-direction: column;
  border: 0;

  label {
    font-family: sans-serif;
    margin: 0 0 .5rem;
    font-size: 1.4rem;
  }

  input {
    font-size: 1.6rem;
    padding: .2rem .5rem;
    margin: 0 0 2rem;
  }
`;

const Button = styled.button`
  border: 0;
  width: 100%;
  background: #3498db;
  color: #fff;
  font-size: 1.4rem;
  border-radius: .3rem;
  display: inline-block;
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  transition: color 450ms ease-in-out;
  &:hover {
    background: #2980b9;
  }
`;

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);
  
  const setUserContext = useSetUserContext();
  return (
    <Container>
      <Panel>
      <Title>Login</Title>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={e => {
          setError(null);
          e.preventDefault();
          if (
            user.email &&
            user.password &&
            user.password.trim() === "password"
          ) {
            setUserContext({
              name: 'Test User',
              ...user
            });
          } else {
            setError("invalid");
          }
        }}
      >
        <Fieldset>
          <label>Email Address:</label>
          <input
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Fieldset>

        <Fieldset>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Fieldset>
        <Button type="submit">Login</Button>
      </form>
      </Panel>
    </Container>
  );
};

export default Login;
