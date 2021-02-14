import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
// import Matches from './Matches';
import Match from './Match';

// here we will need something that says: if user exists, show these matches
const Matches = (props) => {
  // create button, if button is clicked. call the prop and iterate through matches, match should hace its own component
  console.log(props);
  const { userData, setUserData } = useContext(UserContext);
  //   return <h1> homepage</h1>;
  const userMatchesList = props.userMatches.map((user, i) => {
    console.log(user);
    return (
      // <li key={user._id}>
      <Match
        username={user.username}
        availability={user.availability}
        skillLevel={user.skillLevel}
        bio={user.bio}
        city={user.city}
        zipcode={user.zipcode}
        image={user.image}
        index={i + 1}
        id={user._id}
        key={user._id}
      />
      // </li>
    );
  });
  // return <ul className="match-list">{userMatchesList}</ul>;

  return (
    <div>
      <h1 className="rank-title"> Your Player Matches </h1>

      {/* {(userData.user && (props.userMatches.length > 0)) ( */}

      {props.userMatches.length > 0 ? (
        userMatchesList
      ) : (
        <h1> No matches found</h1>
      )}
    </div>
  );
};
export default Matches;
