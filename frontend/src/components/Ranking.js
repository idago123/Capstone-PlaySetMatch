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
  /* {
    'jordan': 2
    'ida': 5
}*/

  const gameResultsList = async () => {
    try {
      const apiListGames = await axios.get('http://localhost:5000/match');

      const rankings = apiListGames.data.reduce((wins, match) => {
        const winner = match.winner;
        if (wins[winner]) {
          wins[winner] += 1;
        } else {
          wins[winner] = 1;
        }
        return wins;
      }, {});
      console.log(rankings);
      setResults(rankings);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  useEffect(() => {
    gameResultsList();
  }, []);

  console.log({ results });
  return (
    <div>
      <h1> Rankings </h1>
      <h2> {JSON.stringify(results)}</h2>
    </div>
  );
};
export default Ranking;
