// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import NewUserForm from './components/NewUserForm';
import Login from './components/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/navbar';
import AuthOptions from './components/AuthOptions';
import Header from './components/Header';
import Home from './components/Header';
import UserContent from './context/UserContent';
import Axios from 'axios';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
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
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <>
      <BrowserRouter>
        <UserContent.Provider value={{ userData, setUserData }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={NewUserForm} />
          </Switch>
        </UserContent.Provider>
      </BrowserRouter>
    </>
    // <NewUserForm />
    // <Router>
    //   <Navbar />
    //   <br />
    //   <Route path="/matches" exact componemt={userMatches} />
    //   <Route path="/edit/:id" component={editUser} />
    //   <Route path="/create" component={createUser} />
    // </Router>
    // <div className="App">
    //   <header className="App-header">

    //   </header>
    // </div>
  );
}

export default App;
