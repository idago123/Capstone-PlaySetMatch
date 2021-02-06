import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContent';

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const login = () => history.push('/login');
  const register = () => history.push('/register');
  // const matchList = () => history.push('/matches'); //new
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <>
          <button onClick={logout}> Logout </button>
          {/* <button onClick={matchList}> Find Matches </button> */}
        </>
      ) : (
        <>
          <button onClick={login}> Log in </button>
          <button onClick={register}> Register</button>
        </>
      )}
    </nav>
  );
};

export default AuthOptions;
