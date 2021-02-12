import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from './AuthOptions';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    <header id="header">
      {/* <Link to="/">
        <h1 className="title"> PlaySetMatch </h1>
      </Link> */}
      <div class="row justify-content-between">
        <div class="col-4">
          <Link to="/">
            <h1 className="title me-auto"> PlaySetMatch </h1>
          </Link>
        </div>
        <div class="col-4">
          <AuthOptions />
        </div>
      </div>

      {/* <AuthOptions /> */}
    </header>
  );
};

export default Header;
