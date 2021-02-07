import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
// import { Form } from 'react-bootstrap';

const GameResultForm = (props) => {
  const [username, setUser] = useState('');
  const [winner, setWinner] = useState('');
  const [date, setDate] = useState('');

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  // const onFormSubmit = (event) => {
  const onFormSubmit = async (event) => {
    event.preventDefault();

    const newResult = {
      username: userData.user.username,
      winner,
      date,
    };
    const loginRes = await axios
      .post('http://localhost:5000/match/add', newResult)
      .then((response) => {})
      .catch((err) => {
        console.log(err.response);
      });
    console.log(newResult);
  };

  return (
    <form
      className="new-user-form"
      onSubmit={onFormSubmit}
      data-testid="NewUserForm--form"
    >
      {/* <div>
        <label htmlFor="user">Username:</label>
        <input
          id="user"
          name="user"
          onChange={(event) => setUser(event.target.value)}
          value={username}
          className="user"
        />
      </div> */}
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
