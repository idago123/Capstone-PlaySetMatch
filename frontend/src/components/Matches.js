import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import Match from './Match';

// if user exists, show these matches
const Matches = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const userMatchesList = props.userMatches.map((user, i) => {
    return (
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
    );
  });

  return (
    <div>
      <h1 className="rank-title"> Your Player Matches </h1>
      <p className="rank-title">
        {' '}
        * All matches are based on availability, skill level and location. Find
        and reach out to your next tennis buddy below.
      </p>

      {props.userMatches.length > 0 ? (
        userMatchesList
      ) : (
        <h1> No matches found</h1>
      )}
    </div>
  );
};
export default Matches;
