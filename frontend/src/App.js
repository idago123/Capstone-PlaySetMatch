// import logo from './logo.svg';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import NewUserForm from './components/NewUserForm';
import Login from './components/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/navbar';
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
//match function, gets collection of user data, save matches field

// const BASE_URL = 'https://play-set-match-api.herokuapp.com';
// const BASE_URL = 'http://localhost:5000';

function App() {
  const [userCollection, setUserCollection] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [matches, setMatches] = useState([]);
  const [userData, setUserData] = useState({
    token: null,
    user: null,
  });
  // const location = useLocation();
  // console.log(location);
  // check to see if user is logged in
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await Axios.post(
        `${process.env.API_URL}/users/tokenIsValid`,
        null,
        { headers: { 'x-auth-token': token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(`${process.env.API_URL}/users`, {
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
      Axios.get(`${process.env.API_URL}`)
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
    // console.log(userData.user);
    Axios.get(`${process.env.API_URL}/users/matches/${user.id}`)
      .then((response) => {
        const apiMatchUsers = response.data;
        setMatches(apiMatchUsers);
        // console.log(`apimatch users is: ${apiMatchUsers}`);
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
  // const backgroundClassName = location.pathname === '/' ? 'tennis-bg' : '';
  console.log(matches);
  return (
    <>
      <BrowserRouter>
        <UserContent.Provider value={{ userData, setUserData }}>
          <Header />
          {/* <Badge badgeContent={5} color="primary">
            <p>hello</p> */}
          {/* </Badge> */}
          <Switch>
            {/* <Route exact path="/">
              <Home userMatches={matches} />
            </Route> */}

            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/Register" component={NewUserForm} />
            <Route path="/ResultsForm" component={GameResultForm} />
            <Route path="/Rankings" component={Ranking} />
            <Route path="/Calendar" component={Calendar} />
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
