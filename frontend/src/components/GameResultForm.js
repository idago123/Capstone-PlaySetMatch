import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
// import { Form } from 'react-bootstrap';

const GameResultForm = (props) => {
  const [username, setUsername] = useState('');
  const [winner, setWinner] = useState('');
  const [date, setDate] = useState('');
  const [tennisBuddy, setTennisBuddy] = useState('');

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  // const onFormSubmit = (event) => {
  const onFormSubmit = async (event) => {
    event.preventDefault();
    // ADD TENNIS BUDDY FIELD TO BACKEND AND MAYBE SCORE CARD
    // HOW TO IMPLEMENT CALENDAR COMPONENT THAT CONTAINS PAST AND FUTURE GAMES?
    // for chat messages: back end model - only contain the user field (the user recieving messages) and the value can be an array of hashes. the hashes key would be: from_user, date (date.now), and message string.
    const newResult = {
      username: userData.user.username,
      winner,
      date,
      tennisBuddy,
    };

    // const loginRes = await axios
    //   .post('http://localhost:5000/match/add', newResult)
    //   .then((response) => {})
    //   .catch((err) => {
    // console.log(err.response);
    //   });
    try {
      const loginRes = await axios.post(
        'http://localhost:5000/match/add',
        newResult
      );
      setTennisBuddy('');
      setWinner('');
      setDate('');
    } catch (err) {
      console.log(err.response);
    }

    console.log(newResult);
  };

  return (
    <form
      className="new-user-form"
      onSubmit={onFormSubmit}
      data-testid="NewUserForm--form"
    >
      <div>
        <label htmlFor="buddy">Tennis Buddy:</label>
        <input
          id="buddy"
          name="buddy"
          onChange={(event) => setTennisBuddy(event.target.value)}
          value={tennisBuddy}
          className="buddy"
        />
      </div>
      <div>
        <label htmlFor="winner">Winner:</label>
        <input
          id="winner"
          name="winner"
          onChange={(event) => setWinner(event.target.value)}
          value={winner}
          className="winner"
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          onChange={(event) => setDate(event.target.value)}
          value={date}
          className="date"
        />
      </div>
      <input type="submit" value="Record Result" />
    </form>
  );
};

export default GameResultForm;
