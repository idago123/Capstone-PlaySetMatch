import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import { Form, Button, Alert, Container, Col } from 'react-bootstrap';

// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://play-set-match-api.herokuapp.com';

const SendMessageForm = (props) => {
  console.log(props);
  const { userData, setUserData } = useContext(UserContext);

  const [message, setMessage] = useState('');

  const [alertMessage, setAlertMessage] = useState(null);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`${BASE_URL}/users/message`, {
      date: Date.now(),
      from: userData.user.id,
      message: message,
      to: props.toUserId,
      sender_name: userData.user.username,
      receiver_name: props.receiver_name,
    });

    setMessage('');
    setAlertMessage('Your message has been sent.');
  };

  return (
    <form
      className="new-user-form"
      onSubmit={onFormSubmit}
      data-testid="NewUserForm--form"
    >
      <div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            as="textarea"
            rows={2}
            className="message-box"
          />
        </Form.Group>
      </div>
      <Button variant="secondary" type="submit" value="message">
        Send Message
      </Button>
      {alertMessage ? <Alert variant="info">{alertMessage}</Alert> : ''}
    </form>
  );
};

export default SendMessageForm;
