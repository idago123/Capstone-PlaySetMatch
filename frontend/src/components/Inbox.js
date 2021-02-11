import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import SendMessageForm from './SendMessageForm';

const Inbox = () => {
  const { userData } = useContext(UserContext);

  console.log(userData.user);
  console.log(userData.user.sentMsg);
  //parse through this to get date, user msg, => userData.user.inbox, reply back?
  // go through userData.user.inbox, look at data.from, create an object keys (keys = id data.from and data.to, values = array of hashes (messages, date, boolean to say if its to or from))
  //
  const userInbox = userData.user.inbox.map((data, index) => {
    return (
      <div>
        <ul>
          <li>{`Date: ${data.date}`}</li>
          <li> {`From: ${data.from}`} </li>
          <li>{`Message: ${data.message}`} </li>
          <li>
            {'Reply back:'} <SendMessageForm toUserId={data.from} />
          </li>
        </ul>
      </div>
    );
  });

  const sentMessages = userData.user.sentMsg.map((data, index) => {
    console.log(data);
    return (
      <div>
        <ul>
          <li>{`Date: ${data.date}`}</li>
          <li> {`To: ${data.to}`} </li>
          <li>{`Message: ${data.message}`} </li>
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1> Inbox </h1>
      <div className="inbox">
        {/* use a loop to display inbox and sent message in order */}
        {userData.user.inbox
          ? userInbox
          : //   ? JSON.stringify(userData.user.inbox)
            'You have not received any messages'}
      </div>
      <h1> Sent </h1>
      <div className="sent">
        {userData.user.sentMsg
          ? sentMessages
          : //   ? JSON.stringify(userData.user.sentMsg)
            'You have not sent any messages'}
      </div>
    </div>
  );
};

export default Inbox;
