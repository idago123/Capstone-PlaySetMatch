import React from 'react';
import SendMessageForm from './SendMessageForm';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

const Match = (props) => {
  return (
    <div className="ranking-table">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th colSpan="1">#</th>
            <th colSpan="1">Avatar</th>
            <th colSpan="1">Username</th>
            <th colSpan="1">About</th>
            <th colSpan="1">Skill Level</th>
            <th colSpan="1">Availability</th>
            <th colSpan="1">City</th>
            <th colSpan="1">Zipcode</th>
            <th colSpan="3">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-warning">{props.index}</td>
            <td class="table-warning">
              <Image src={props.image} thumbnail />
            </td>
            <td class="table-warning">{props.username}</td>
            <td class="table-warning">{props.bio}</td>
            <td class="table-warning">{props.skillLevel}</td>
            <td class="table-warning">{props.availability}</td>
            <td class="table-warning">{props.city}</td>
            <td class="table-warning">{props.zipcode}</td>
            <td class="table-warning">
              <SendMessageForm
                toUserId={props.id}
                receiver_name={props.username}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Match;
