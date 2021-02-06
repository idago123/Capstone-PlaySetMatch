import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
const NewUserForm = (props) => {
  const [username, setUsername] = useState('');
  const [skill, setSkill] = useState('');
  const [availability, setAvailability] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  // const onFormSubmit = (event) => {
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      username,
      skill,
      availability,
      city,
      zipcode,
      bio,
      image,
    };
    const loginRes = await axios.post(
      'http://localhost:5000/users/add',
      newUser
    );

    if (loginRes.status === 200) {
      const loginRes = await axios.post(
        'http://localhost:5000/users/login',
        newUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem('auth-token', loginRes.data.token);
      history.push('/');
    }

    // const loginRes = await axios.post('http://localhost:5000/users/add', {
    //   username,
    // });
    // setUserData({
    //   token: loginRes.data.token,
    //   user: loginRes.data.user,
    // });
    // localStorage.setItem('auth-token', loginRes.data.token);
    // history.push('/');
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
        <label htmlFor="city">City:</label>
        <input
          id="city"
          name="city"
          onChange={(event) => setCity(event.target.value)}
          value={city}
          className="city"
        />
      </div>
      <div>
        <label htmlFor="zipcode">Zipcode:</label>
        <input
          id="zipcode"
          name="zipcode"
          onChange={(event) => setZipcode(event.target.value)}
          value={zipcode}
          className="zipcode"
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
        <label htmlFor="image">Image:</label>
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
