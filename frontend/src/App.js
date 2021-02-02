// import logo from './logo.svg';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NewUserForm from './components/NewUserForm';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/navbar';

function App() {
  return (
    <NewUserForm />
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
