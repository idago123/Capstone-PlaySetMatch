import React from 'react';
import SendMessageForm from './SendMessageForm';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

const Match = (props) => {
  console.log(props.username);
  return (
    <div className="ranking-table">
      {/* <Table striped bordered hover variant="dark">
        <thead> */}
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Username</th>
            <th>About</th>
            <th>Skill Level</th>
            <th>Availability</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-warning">{props.index}</td>
            <td class="table-warning">
              <Image src={props.image} thumbnail />
              {/* <img src={props.image} alt="user photo" /> */}
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
      {/* </Table> */}
    </div>
  );
};

export default Match;
