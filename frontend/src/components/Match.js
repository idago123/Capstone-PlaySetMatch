import React from 'react';
import SendMessageForm from './SendMessageForm';
import Table from 'react-bootstrap/Table';

const Match = (props) => {
  console.log(props.username);
  return (
    <div className="ranking-table">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
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
            <td>1</td>
            <td>
              <img src={props.image} alt="user photo" />
            </td>
            <td>{props.username}</td>
            <td>{props.bio}</td>
            <td>{props.skillLevel}</td>
            <td>{props.availability}</td>
            <td>{props.city}</td>
            <td>{props.zipcode}</td>
            <td>
              <SendMessageForm
                toUserId={props.id}
                receiver_name={props.username}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Match;
