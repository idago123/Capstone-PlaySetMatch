import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

const NewUserForm = (props) => {
  const [username, setUsername] = useState('');
  const [skill, setSkill] = useState('');
  const [availability, setAvailability] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    // props.addCardCallback({ text, emoji });

    setUsername('');
    setSkill('');
    setAvailability('');
    setBio('');
    setImage('');
  };

  return (
    <form
      className="new-user-form"
      onSubmit={onFormSubmit}
      data-testid="NewUserForm--form"
    >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          className="username"
        />
      </div>
      <div>
        <label htmlFor="skill">Skill Level:</label>
        <input
          id="skill"
          name="skill"
          onChange={(event) => setSkill(event.target.value)}
          value={skill}
          className="skill"
        />
      </div>
      <div>
        <label htmlFor="availability">Availability:</label>
        <input
          id="availability"
          name="availability"
          onChange={(event) => setAvailability(event.target.value)}
          value={availability}
          className="availability"
        />
      </div>
      <div>
        <label htmlFor="bio">About:</label>
        <input
          id="bio"
          name="bio"
          onChange={(event) => setBio(event.target.value)}
          value={bio}
          className="bio"
        />
      </div>
      <div>
        <label htmlFor="image">Skill Level:</label>
        <input
          id="image"
          name="image"
          onChange={(event) => setImage(event.target.value)}
          value={image}
          className="image"
        />
      </div>
      <input type="submit" value="Add User" />
    </form>
  );
};

export default NewUserForm;
