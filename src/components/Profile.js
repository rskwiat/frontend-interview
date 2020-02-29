import * as React from "react";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext, useSetUserContext } from "../contexts/user";


const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;

  h1 {
    font-family: sans-serif;
    margin: 4rem 0 2rem;
  }
`;

const Form = styled.form`
  max-width: 50rem;
  border: 1px solid #ccc;
  box-shadow: 0 3px 12px rgba(0,0,0,.1);
  padding: 4rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
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
  max-width: 300px;
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

const Profile = (props) => {
  const user = useUserContext();
  const setUser = useSetUserContext();

  return (
    <Container>
      <h1>Edit your profile</h1>
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.history.push("/");
        }}
      >
        <Fieldset>
          <label>Edit Username:</label>
          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </Fieldset>

        <Fieldset>
          <label>Edit Email Address:</label>
          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Fieldset>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default withRouter(Profile);
