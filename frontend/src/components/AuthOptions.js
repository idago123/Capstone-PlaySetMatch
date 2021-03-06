import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContent';
import Home from './Home';
import Login from './Login';
import Image from 'react-bootstrap/Image';

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const login = () => history.push('/login');
  const register = () => history.push('/register');
  const results = () => history.push('/ResultsForm');
  const ranking = () => history.push('/Rankings');
  const matches = () => history.push('/Matches');
  const calendar = () => history.push('/Calendar');
  const inbox = () => history.push('/Inbox');
  const profile = () => history.push('/Profile');

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
    history.push('/');
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <>
          <h3>{`Hello, ${userData.user.username}!`}</h3>
          <button onClick={results}> Record Your Match </button>
          <button onClick={ranking}> Rankings </button>
          <button onClick={matches}> Find Your Tennis Buddy</button>
          <button onClick={calendar}> My Calendar</button>
          <button onClick={inbox}> Inbox </button>
          <button onClick={profile}> Profile </button>
          <button onClick={logout}> Logout </button>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </nav>
  );
};

export default AuthOptions;
