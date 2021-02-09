import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from './AuthOptions';

const Header = () => {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title"> PlaySetMatch </h1>
      </Link>
      {/* <Link to="/Matches">
        <h2 className="matchtitle"> Find Matches</h2>
      </Link> */}
      {/* <Link to="/Rankings">
        <h1 className="rankings"> Rankings </h1>
      </Link> */}
      {/* <Link to="/Calendar">
        <h1 className="calendar"> Calendar </h1>
      </Link> */}
      <AuthOptions />
    </header>
  );
};

export default Header;
