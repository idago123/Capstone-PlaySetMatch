// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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

import UserContent from './context/UserContent';
import Axios from 'axios';
import './components/style.css';
//match function, gets collection of user data, save matches field

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
        'localhost:5000/users/tokenIsValid',
        null,
        { headers: { 'x-auth-token': token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get('localhost:5000/users', {
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
      Axios.get('http://localhost:5000/users')
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
    Axios.get(`http://localhost:5000/users/matches/${user.id}`)
      .then((response) => {
        const apiMatchUsers = response.data;
        setMatches(apiMatchUsers);
        // console.log(`apimatch users is: ${apiMatchUsers}`);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);
  console.log(userData);

  useEffect(() => {
    if (userData.user) {
      matchUsers(userData.user);
    }
  }, [userData, matchUsers]);
  //  if (userData.token) {
  //     // if availability, skill level, city or zipcode match, store in a new variable and then return a list of users
  //   }
  //     const userMatches = userCollection.map((user, i) => {
  //       if (userData.token) {
  //       }

  //       return (
  //         <ul>
  //           <li>username={user.username}</li>
  //             <li>overview={user.bio}</li>

  //         </ul>
  //       );
  //   }

  // };
  // }, []);

  // const matchUsers = () => {
  //   useEffect(() => {
  //     axios
  //       .get('http://localhost:5000/users')
  //       .then((response) => {
  //         const apiListUsers = response.data;
  //         setUserCollection(apiListUsers);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.message);
  //       });
  //   }, []);

  //   console.log(userCollection);
  // };

  // matchUsers();
  // console.log(matches);

  return (
    <>
      <BrowserRouter>
        <UserContent.Provider value={{ userData, setUserData }}>
          <Header />
          <Switch>
            {/* <Route exact path="/">
              <Home userMatches={matches} />
            </Route> */}
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={NewUserForm} />
            <Route path="/ResultsForm" component={GameResultForm} />
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
