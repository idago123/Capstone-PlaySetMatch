import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory, Link } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
import { Form, Button, Container, Col } from 'react-bootstrap';

// const BASE_URL = 'http://localhost:5000';

const GameResultForm = (props) => {
  const [username, setUsername] = useState('');
  const [winner, setWinner] = useState('');
  const [date, setDate] = useState('');
  const [tennisBuddy, setTennisBuddy] = useState('');
  const [location, setLocation] = useState('');
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  // const onFormSubmit = (event) => {
  const onFormSubmit = async (event) => {
    event.preventDefault();

    const newResult = {
      username: userData.user.username,
      winner,
      date,
      tennisBuddy,
      location,
    };

    try {
      const loginRes = await axios.post(
        `${process.env.API_URL}/match/add`,
        newResult
      );
      setTennisBuddy('');
      setWinner('');
      setDate('');
      setLocation('');
    } catch (err) {
      console.log(err.response);
    }
    history.push('/Calendar');
  };

  return (
    <div className="button-submit-record">
      {' '}
      <h1 className="rank-title"> Record Past or Upcoming Matches</h1>
      <p className="rank-title">
        * Matches automatically get updated in the{' '}
        <Link to="/Calendar"> calendar</Link> and{' '}
        <Link to="/Rankings"> rankings</Link> page after they are recorded.{' '}
      </p>
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
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="location"
            placeholder="Enter tennis court name"
            onChange={(event) => setLocation(event.target.value)}
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
  );
};

export default GameResultForm;
