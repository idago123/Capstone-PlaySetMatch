import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from './AuthOptions';

const Header = () => {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title"> PlaySetMatch </h1>
      </Link>
      <Link to="/Matches">
        <h2> Find Matches</h2>
      </Link>
      <AuthOptions />
    </header>
  );
};

export default Header;
