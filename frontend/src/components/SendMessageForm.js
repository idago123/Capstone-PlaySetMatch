import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import { Form, Button, Container, Col } from 'react-bootstrap';

const SendMessageForm = (props) => {
  console.log(props);
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  // date, sentUser and message should be an object in inbox
  const [toUsername, setToUsername] = useState();
  //   const [date, setDate] = useState(Date.now)
  const [message, setMessage] = useState('');
  // figure out how to push new data into the array instead of replacing old data
  const [inbox, setInbox] = useState([]);
  //**Updating info from the logged in user who sent a message */
  //   const [composed, setComposed] = useState(userData.user.sentMessage);
  const [errorMessage, setErrorMessage] = useState(null);

  // Figure out how to find the id of the username who is recieving the msg + how to store data from the form into an array in the inbox state
  //get username from the form user has been submitted. Need to find the id of that username in our database.
  // Make a call to axios? store all users in an array and create context for it? to get access to user database and specifically the id
  // once we get the id of the username who will receive messages, do a post request to edit that users field inbox
  // make sure we are ADDING to the array instead of replacing it each time. Somehow maybe we can use .push?
  // so that it will add messages to the end of the array
  // also do a post request to edit the logged in user's field: sentMessage
  // Then send this component as a prop to Matches or Match component?
  // const userList = async () => {
  //     try {
  //       const apiListUsers = await axios.get('http://localhost:5000/users');
  //       let findUser = ''
  //         for (user in apiListUsers.data) {
  //             if (user.username === props.username) {
  //                 findUser = user
  //             }
  //         }
  //       setToUsername(findUser.username);
  //       setInbox(findUser.inbox)
  //     } catch (error) {
  //       console.log(error);
  //       setErrorMessage(error.message);
  //     }
  //   };
  //   useEffect(() => {
  //     userList();
  //   }, []);
  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(props.toUserId);
    // setInbox([...inbox, {'date': Date.now(), 'from_username': userData.user.username, 'message': message}])
    // setComposed([...composed, {'date': Date.now(), 'to_user': props.toUserId, 'message': message}])

    // const toUser = {
    //   inbox: // date: Date.now, sent_user: userdata.user.id, message:
    // };
    // const fromUser = {
    //     composed: // fromDate: Date.now, sent_user: userdata.user.id, message:
    // };
    await axios.post(`http://localhost:5000/users/message`, {
      date: Date.now(),
      from: userData.user.id,
      message: message,
      to: props.toUserId,
      sender_name: userData.user.username,
      receiver_name: props.receiver_name,
    });

    // const updateFromUser = await axios.post(
    //     `http://localhost:5000/users/update/${userData.user.id}`,
    //     fromUser
    //   );
  };

  return (
    <form
      className="new-user-form"
      onSubmit={onFormSubmit}
      data-testid="NewUserForm--form"
    >
      <div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Example textarea</Form.Label> */}
          <Form.Control
            onChange={(event) => setMessage(event.target.value)}
            as="textarea"
            rows={2}
          />
        </Form.Group>
        {/* <label htmlFor="message">Message:</label>
        <input
          id="message"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          className="message"
          placeholder="Enter your message here"
          STYLE="color: black"
        /> */}
      </div>
      <Button variant="secondary" type="submit" value="message">
        Send Message
      </Button>
      {/* <input type="submit" value="Send Message" /> */}
    </form>
  );
};

export default SendMessageForm;
