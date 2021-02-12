import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
import { Form, Button, Container, Col } from 'react-bootstrap';

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

    history.push('/Calendar');
  };

  return (
    <div className="button-submit-record">
      {' '}
      <h1 className="rank-title"> Record Past or Upcoming Matches</h1>
      <Form className="schedule-form" onSubmit={onFormSubmit}>
        <Form.Group controlId="buddy">
          <Form.Label>Tennis Buddy</Form.Label>
          <Form.Control
            onChange={(event) => setTennisBuddy(event.target.value)}
            type="buddy"
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group controlId="Winner">
          <Form.Label>Winner</Form.Label>
          <Form.Control
            type="winn"
            placeholder="If applicable, enter winner's username"
            onChange={(event) => setWinner(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            onChange={(event) => setDate(event.target.value)}
            type="date"
            placeholder="Enter the date of the meetup"
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    // <div className="record-match">
    //   <form
    //     className="new-user-form"
    //     onSubmit={onFormSubmit}
    //     data-testid="NewUserForm--form"
    //   >
    //     <div>
    //       <label htmlFor="buddy">Tennis Buddy:</label>
    //       <input
    //         id="buddy"
    //         name="buddy"
    //         onChange={(event) => setTennisBuddy(event.target.value)}
    //         value={tennisBuddy}
    //         className="buddy"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="winner">Winner:</label>
    //       <input
    //         id="winner"
    //         name="winner"
    //         onChange={(event) => setWinner(event.target.value)}
    //         value={winner}
    //         className="winner"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="date">Date:</label>
    //       <input
    //         id="date"
    //         name="date"
    //         onChange={(event) => setDate(event.target.value)}
    //         value={date}
    //         className="date"
    //       />
    //     </div>
    //     <input type="submit" value="Record Result" />
    //   </form>
    // </div>
  );
};

export default GameResultForm;
