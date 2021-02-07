//make axios calls to the gameresults database
//create a state variable that store an array of hashes which stores username (and image?) and their win count
//use map function to return users from highest to lowest wins
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';

const Ranking = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const gameResultsList = async () => {
    axios
      .get('http://localhost:5000/match')
      .then((response) => {
        const apiListGames = response.data;
        setResults(apiListGames);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const userMatchesList = props.userMatches.map((user, i) => {
    console.log(user);
    return (
      <li key={i}>
        <Match
          username={user.username}
          availability={user.availability}
          skillLevel={user.skillLevel}
          bio={user.bio}
          city={user.city}
          zipcode={user.zipcode}
        />
      </li>
    );
  });
  // return <ul className="match-list">{userMatchesList}</ul>;

  return (
    <div>
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
