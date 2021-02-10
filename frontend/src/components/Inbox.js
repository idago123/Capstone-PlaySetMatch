import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';

const Inbox = () => {
  // const [users, setUsers] = useState();
  const { userData } = useContext(UserContext);
  // try {
  //     const apiListUsers = await axios.get('http://localhost:5000/users');
  //     setUsers(apiListUsers.data)
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMessage(error.message);
  //   }
  // };
  // useEffect(() => {
  //   userList();
  // }, []);
  console.log(userData.user);
  return (
    <div>
      <h1> Inbox </h1>
      <div className="inbox">
        {/* use a loop to display inbox and sent message in order */}
        {userData.user.inbox}
        {userData.user.sentMessages}
      </div>
    </div>
  );
};

export default Inbox;
