//make axios calls to the gameresults database
//create a state variable that store an array of hashes which stores username (and image?) and their win count
//use map function to return users from highest to lowest wins
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import { Schedule } from '@material-ui/icons';
import { Link } from 'react-router-dom';

// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://play-set-match-api.herokuapp.com';

const Calendar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const allGames = async () => {
    try {
      const apiListGames = await axios.get(`${BASE_URL}/match`);
      console.log(apiListGames.data);
      const schedule = apiListGames.data
        .filter((match) => {
          return userData.user.username === match.username;
        })
        .map((match) => {
          return [match.date, match.tennisBuddy, match.winner, match.location];
        });
      setResults(schedule);
      console.log(schedule);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  useEffect(() => {
    allGames();
  }, []);

  console.log({ results });
  let ranksort = results.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(results);
  return (
    <div className="ranking-table">
      <h1 className="rank-title">Past or Upcoming Events</h1>
      <p className="rank-title">
        {' '}
        * When a game is {<Link to="/ResultsForm"> recorded</Link>}, the
        calendar is automatically updated.{' '}
      </p>
      <table class="table table-dark table-hover">
        <thead>
          <tr class="table-info">
            <th scope="col">Date</th>
            <th scope="col">Tennis Buddy</th>
            <th scope="col">Winner</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {ranksort.map((user, index) => {
            return (
              <tr>
                {/* <th scope="row"> {index + 1}</th> */}
                <td class="table-light">{user[0]}</td>
                <td class="table-light">{user[1]} </td>
                <td class="table-light">{user[2]} </td>
                <td class="table-light">{user[3]} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Calendar;
