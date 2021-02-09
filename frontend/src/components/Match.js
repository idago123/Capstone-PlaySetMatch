import React from 'react';
import SendMessageForm from './SendMessageForm';

const Match = (props) => {
  // console.log(props);
  return (
    <div className="match">
      <ul className="match-details">
        <li>Username: {props.username}</li>
        <li>Bio: {props.bio}</li>
        <li>Skill level {props.skillLevel}</li>
        <li>Availability: {props.availability}</li>
        <li>City: {props.city}</li>
        <li>Zipcode: {props.zipcode}</li>
        <li>
          Photo:
          <img src={props.image} alt="user photo" />
        </li>
      </ul>
      <SendMessageForm toUserId={props.id} />
    </div>
  );
};

export default Match;
