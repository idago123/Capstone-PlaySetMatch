//make axios calls to the gameresults database
//create a state variable that store an array of hashes which stores username (and image?) and their win count
//use map function to return users from highest to lowest wins
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';

const BASE_URL = 'http://localhost:5000';

const Calendar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const allGames = async () => {
    try {
      const apiListGames = await axios.get(`${BASE_URL}/match`);

      const schedule = apiListGames.data.map((match) => {
        if (userData.user.username === match.username) {
          // return [match.date, match.tennisBuddy];
          return `Date: ${match.date}, Tennis Buddy: ${match.tennisBuddy}`; //add location?
        }
      }, {});
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

  return (
    // <div className="ranking-table">
    //   <h1 className="rank-title">Player Rankings </h1>
    //   <table class="table table-dark table-hover">
    //     <thead>
    //       <tr>
    //         <th scope="col">Date</th>
    //         <th scope="col">Tennis Buddy</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {ranksort.map((user, index) => {
    //         return (
    //           <tr>
    //             <th scope="row"> {index + 1}</th>
    //             <td>{user[0]}</td>
    //             <td>{user[1]} </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
    <div>
      <h1> My Calendar</h1>
      <h2>{results}</h2>
    </div>
  );
};
export default Calendar;
