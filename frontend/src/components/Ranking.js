//make axios calls to the gameresults database
//create a state variable that store an array of hashes which stores username (and image?) and their win count
//use map function to return users from highest to lowest wins
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory, Link } from 'react-router-dom';

// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://play-set-match-api.herokuapp.com';

const Ranking = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const gameResultsList = async () => {
    try {
      const apiListGames = await axios.get(`${BASE_URL}/match`);
      const rankings = apiListGames.data.reduce((wins, match) => {
        const winner = match.winner;
        if (wins[winner]) {
          wins[winner] += 1;
        } else {
          wins[winner] = 1;
        }
        return wins;
      }, {});

      setResults(rankings);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  useEffect(() => {
    gameResultsList();
  }, []);

  let sortable = [];
  for (const [key, value] of Object.entries(results)) {
    sortable.push([key, value]);
  }

  let ranksort = sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return (
    <div className="ranking-table">
      <h1 className="rank-title">Player Rankings </h1>
      <p className="rank-title">
        {' '}
        * In order to be ranked, users must{' '}
        <Link to="/ResultsForm">
          {' '}
          <u>record</u>
        </Link>{' '}
        their matches. Rankings are based on number of wins.{' '}
      </p>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Rank #</th>
            <th scope="col">Username</th>
            <th scope="col">Win Count</th>
          </tr>
        </thead>
        <tbody>
          {ranksort.map((user, index) => {
            return (
              <tr>
                <td class="table-light"> {index + 1}</td>
                <td class="table-light">{user[0]}</td>
                <td class="table-light">{user[1]} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Ranking;
