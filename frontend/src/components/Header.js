import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from './AuthOptions';
import { Nav, Navbar } from 'react-bootstrap';
import SportsTennisTwoToneIcon from '@material-ui/icons/SportsTennisTwoTone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const Header = () => {
  return (
    <Navbar bg="warning" variant="dark">
      <Navbar.Brand href="#home">
        <Link to="/">
          <h1>
            {' '}
            PlaySetMatch <SportsTennisTwoToneIcon /> <AccessTimeIcon />{' '}
            <GroupAddIcon />{' '}
          </h1>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">{/* <AuthOptions /> */}</Nav.Link>
      </Nav>
      <AuthOptions />
    </Navbar>
  );
};

export default Header;
