//make axios calls to the gameresults database
//create a state variable that store an array of hashes which stores username (and image?) and their win count
//use map function to return users from highest to lowest wins
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';

const Calendar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const allGames = async () => {
    try {
      const apiListGames = await axios.get('http://localhost:5000/match');

      const schedule = apiListGames.data.map((match) => {
        if (userData.user.username === match.username) {
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
    <div>
      <h1> My Calendar</h1>
      <h2>{results}</h2>
    </div>
  );
};
export default Calendar;
