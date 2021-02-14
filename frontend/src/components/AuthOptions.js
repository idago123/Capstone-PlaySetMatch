import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContent';
import Home from './Home';
import Login from './Login';
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

  // const matchList = () => history.push('/matches'); //new
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

          {/* // figure out the css that will make a side bar for when userdata.user === true vvv */}
          <button onClick={results}> Record Your Match </button>
          <button onClick={ranking}> Rankings </button>
          <button onClick={matches}> Find Your Tennis Buddy</button>
          <button onClick={calendar}> My Calendar</button>
          <button onClick={inbox}> Inbox </button>

          <button onClick={logout}> Logout </button>
        </>
      ) : (
        <>
          {/* <button onClick={login}> Log in </button> */}
          <Login />
          {/* <button onClick={register}> Register</button> */}
        </>
      )}
    </nav>
  );
};

export default AuthOptions;
