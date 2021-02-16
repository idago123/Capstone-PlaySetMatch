import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import NewUserForm from './components/NewUserForm';
import Login from './components/Login';
import AuthOptions from './components/AuthOptions';
import Header from './components/Header';
import Home from './components/Home';
import Matches from './components/Matches';
import GameResultForm from './components/GameResultForm';
import Ranking from './components/Ranking';
import Calendar from './components/Calendar';
import UserContent from './context/UserContent';
import Axios from 'axios';
import Inbox from './components/Inbox';
import { Badge } from '@material-ui/core';
import './components/style.css';
import Profile from './components/Profile';

// const BASE_URL = 'https://play-set-match-api.herokuapp.com';
// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://play-set-match-api.herokuapp.com';

// process.env.API_URL
function App() {
  const [userCollection, setUserCollection] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [matches, setMatches] = useState([]);
  const [userData, setUserData] = useState({
    token: null,
    user: null,
  });

  // check to see if user is logged in
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await Axios.post(
        `${BASE_URL}/users/tokenIsValid`,
        null,
        { headers: { 'x-auth-token': token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(`${BASE_URL}/users`, {
          headers: { 'x-auth-token': token },
        });
        console.log(userRes.data);
        setUserData({
          token,
          user: tokenRes.data,
        });
      }
    };
    checkLoggedIn();

    const usersList = async () => {
      Axios.get(`${BASE_URL}`)
        .then((response) => {
          const apiListUsers = response.data;
          setUserCollection(apiListUsers);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    };
    usersList();
  }, []);

  const matchUsers = useCallback((user) => {
    Axios.get(`${BASE_URL}/users/matches/${user.id}`)
      .then((response) => {
        const apiMatchUsers = response.data;
        setMatches(apiMatchUsers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  useEffect(() => {
    if (userData.user) {
      matchUsers(userData.user);
    }
  }, [userData, matchUsers]); //only execute this function if the value of one of my dependencies is different from the previous render

  console.log(matches);
  return (
    <>
      <BrowserRouter>
        <UserContent.Provider value={{ userData, setUserData }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={NewUserForm} />
            <Route path="/ResultsForm" component={GameResultForm} />
            <Route path="/Rankings" component={Ranking} />
            <Route path="/Calendar" component={Calendar} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Inbox">
              <Inbox />
            </Route>
            <Route exact path="/Matches">
              <Matches userMatches={matches} />
            </Route>
          </Switch>
        </UserContent.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
