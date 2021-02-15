import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import UserContext from '../context/UserContent';
import { Container, Col, Row, Image } from 'react-bootstrap';
import tennisBall from '../image/tennisball.png';
import tennisPlayers from '../image/players.png';
import newTennis from '../image/newtennis.png';
import tennisball3 from '../image/tennisball3.png';

const Home = (props) => {
  const history = useHistory();

  const register = () => history.push('/register');
  const login = () => history.push('/login');
  const { userData, setUserData } = useContext(UserContext);

  return (
    <Container>
      <Row>
        <Col xs={8}>
          {' '}
          {/* <div className="container-home">
            <div className="small-container"> */}
          <div className="front-page">
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
            {/* </div> */}
            {userData.user ? (
              ''
            ) : (
              <Button variant="warning" size="lg" onClick={register}>
                Register
              </Button>
            )}
            {/* </div> */}
          </div>
        </Col>
        <Col>
          <div className="front-image">
            <Image
              src={tennisball3}
              // "https://cdn.pixabay.com/photo/2014/04/03/10/11/tennis-310075_1280.png"
              // "https://cdn.pixabay.com/photo/2013/07/13/01/19/tennis-court-155517_1280.png"
              // "https://cdn.pixabay.com/photo/2017/01/31/16/55/female-2025511_1280.png"
              // "https://cdn.pixabay.com/photo/2016/09/21/07/59/tennis-1684285_1280.png"
              // "            https://cdn.pixabay.com/photo/2019/03/09/22/54/female-4045177_1280.png"            alt="tennis"
              fluid
            />
            <Image
              src={tennisPlayers}
              // "https://cdn.pixabay.com/photo/2014/04/03/10/11/tennis-310075_1280.png"
              // "https://cdn.pixabay.com/photo/2013/07/13/01/19/tennis-court-155517_1280.png"
              // "https://cdn.pixabay.com/photo/2017/01/31/16/55/female-2025511_1280.png"
              // "https://cdn.pixabay.com/photo/2016/09/21/07/59/tennis-1684285_1280.png"
              alt="tennis-court"
              fluid
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
