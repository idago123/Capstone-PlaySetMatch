import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://play-set-match-api.herokuapp.com';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const loginUser = { username };
    const loginRes = await axios.post(`${BASE_URL}/users/login`, loginUser);
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem('auth-token', loginRes.data.token);
    history.push('/');
  };
  console.log(process);

  return (
    <Container>
      <Form
        inline
        className="new-user-form"
        onSubmit={onFormSubmit}
        data-testid="NewUserForm--form"
      >
        <Form.Group controlId="formUsername">
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            className="username"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Log In
        </Button>
        {/* <Button variant="outline-info" type="submit" value="Log In">
          Log In
         </Button> */}
      </Form>
    </Container>

    // <form
    //   className="new-user-form"
    //   onSubmit={onFormSubmit}
    //   data-testid="NewUserForm--form"
    // >
    //   <div>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       id="username"
    //       name="username"
    //       onChange={(event) => setUsername(event.target.value)}
    //       value={username}
    //       className="username"
    //     />
    //   </div>

    //   <input type="submit" value="Log In" />
    // </form>
  );
};

export default Login;
