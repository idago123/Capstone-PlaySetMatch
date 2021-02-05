import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from './AuthOptions';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1>PlaySetMatch </h1>
      </Link>
      <Link to="/Matches">
        <h1> Find Matches</h1>
      </Link>
      <AuthOptions />
    </div>
  );
};

export default Header;
