import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from './AuthOptions';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Navbar } from 'react-bootstrap/Navbar';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Navbar bg="warning" variant="dark">
      <Navbar.Brand href="#home">
        <Link to="/">
          <h1> PlaySetMatch </h1>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">{/* <AuthOptions /> */}</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" /> 
         <Button variant="outline-info">Search</Button>
        <AuthOptions />
      </Form> */}
      <AuthOptions />
    </Navbar>

    // <div className="header">
    //   <AppBar position="static" className="appbar-header">
    //     <Toolbar>
    //       <Typography variant="h6" className={classes.title}>
    //         {/* PlaySetMatch */}
    //         <Link to="/">
    //           <h1 className="title"> PlaySetMatch </h1>
    //         </Link>
    //       </Typography>
    //       {/* <Button color="white"> */}
    //       {/* Login */}
    //       <AuthOptions />
    //       {/* </Button> */}
    //     </Toolbar>
    //   </AppBar>
    // </div>
    // new stuff below
    // <header id="header">
    //   {/* <Link to="/">
    //     <h1 className="title"> PlaySetMatch </h1>
    //   </Link> */}
    //   <div class="row justify-content-between">
    //     <div class="col-4">
    //       <Link to="/">
    //         <h1 className="title me-auto"> PlaySetMatch </h1>
    //       </Link>
    //     </div>
    //     <div class="col-4">
    //       <AuthOptions />
    //     </div>
    //   </div>

    //   {/* <AuthOptions /> */}
    // </header>
  );
};

export default Header;
