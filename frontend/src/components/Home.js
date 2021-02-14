import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import UserContext from '../context/UserContent';

const Home = (props) => {
  const history = useHistory();

  const register = () => history.push('/register');
  const login = () => history.push('/login');
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div className="container-home">
      <div className="small-container">
        <h1 className="larger-statement">
          A match-making, scheduling tool and social platform for tennis
          players.
        </h1>
        <h2 className="medium-statement">
          {' '}
          <SportsTennisIcon /> Play:{' '}
        </h2>
        <h3 className="small-statement">
          {' '}
          Whenever, wherever and with whomever you want.{' '}
        </h3>
        <h2 className="medium-statement">
          {' '}
          <AccessTimeIcon /> Set:{' '}
        </h2>
        <h3> A schedule to find the perfect time and place to meet.</h3>
        <h2 className="medium-statement">
          {' '}
          <GroupAddIcon /> Match:{' '}
        </h2>
        <h3>With the perfect practice buddy. </h3>
        {/* <footer className="footer">
          <p> Ida Goitom</p>
        </footer> */}
      </div>
      {userData.user ? (
        ''
      ) : (
        <Button variant="warning" size="lg" onClick={register}>
          Register
        </Button>
      )}
    </div>
  );
};
export default Home;
