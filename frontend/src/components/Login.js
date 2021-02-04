import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const loginUser = { username };
    const loginRes = await axios.post(
      'http://localhost:5000/users/login',
      loginUser
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem('auth-token', loginRes.data.token);
    history.push('/');
  };

  return (
    <form
      className="new-user-form"
      onSubmit={onFormSubmit}
      data-testid="NewUserForm--form"
    >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          className="username"
        />
      </div>

      <input type="submit" value="Log In" />
    </form>
  );
};

export default Login;
