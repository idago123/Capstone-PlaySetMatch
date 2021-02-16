import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import SendMessageForm from './SendMessageForm';
import Table from 'react-bootstrap/Table';

const Inbox = () => {
  const { userData } = useContext(UserContext);

  const userInbox = userData.user.inbox.map((data, index) => {
    let newdate = new Date(data.date);
    let day = String(newdate.getDate()).padStart(2, '0');
    let month = String(newdate.getMonth() + 1).padStart(2, '0');
    let year = newdate.getFullYear();
    let fullDate = month + '/' + day + '/' + year;

    return (
      <div className="inbox-table">
        <table class="table table-sm table-dark">
          <thead>
            <tr class="table-light">
              <th>#</th>
              <th>Date</th>
              <th>From</th>
              <th>Message</th>
              <th>Reply Back</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-success">{index + 1}</td>
              <td className="table-success">{fullDate}</td>
              <td className="table-success">{data.sender_name}</td>
              <td className="table-success">{data.message}</td>
              <td className="table-success">
                <SendMessageForm
                  toUserId={data.from}
                  sender_name={data.username}
                  receiver_name={data.sender_name}
                />
              </td>
            </tr>
          </tbody>
        </table>
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
      <div className="inbox-table">
        <table class="table table-sm table-dark">
          <thead>
            <tr class="table-dark">
              <th>#</th>
              <th>Date</th>
              <th>To</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-secondary">{index + 1}</td>
              <td class="table-secondary">{fullDate}</td>
              <td class="table-secondary">{data.receiver_name}</td>
              <td class="table-secondary">{data.message}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
  return (
    <div>
      <h1 className="messages"> Inbox </h1>
      <div className="inbox">
        {userData.user.inbox ? userInbox : 'You have not received any messages'}
      </div>
      <h1 className="messages"> Sent </h1>
      <div className="sent">
        {userData.user.sentMsg
          ? sentMessages
          : 'You have not sent any messages'}
      </div>
    </div>
  );
};

export default Inbox;
