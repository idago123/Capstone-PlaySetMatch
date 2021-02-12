import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import SendMessageForm from './SendMessageForm';

const Inbox = () => {
  const { userData } = useContext(UserContext);

  // console.log(userData.user);
  // console.log(userData.user.sentMsg);
  //parse through this to get date, user msg, => userData.user.inbox, reply back?
  // go through userData.user.inbox, look at data.from, create an object keys (keys = id data.from and data.to, values = array of hashes (messages, date, boolean to say if its to or from))
  //

  const userInbox = userData.user.inbox.map((data, index) => {
    let newdate = new Date(data.date);
    let day = String(newdate.getDate()).padStart(2, '0');
    let month = String(newdate.getMonth() + 1).padStart(2, '0');
    let year = newdate.getFullYear();
    let fullDate = month + '/' + day + '/' + year;
    console.log(newdate);
    return (
      <div>
        <ul>
          <li>{`Date: ${fullDate}`}</li>
          {/* //from */}
          <li> {`From: ${data.sender_name}`} </li>
          <li>{`Message: ${data.message}`} </li>
          <li>
            {'Reply back:'}{' '}
            <SendMessageForm
              toUserId={data.from}
              sender_name={data.username}
              receiver_name={data.sender_name}
            />
          </li>
        </ul>
      </div>
    );
  });

  const sentMessages = userData.user.sentMsg.map((data, index) => {
    let newdate = new Date(data.date);
    let day = String(newdate.getDate()).padStart(2, '0');
    let month = String(newdate.getMonth() + 1).padStart(2, '0');
    let year = newdate.getFullYear();
    let fullDate = month + '/' + day + '/' + year;
    return (
      <div>
        <ul>
          <li>{`Date: ${fullDate}`}</li>
          {/* data.to */}
          <li> {`To: ${data.receiver_name}`} </li>
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
