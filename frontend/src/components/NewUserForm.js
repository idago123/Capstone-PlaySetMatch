import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Col } from 'react-bootstrap';

const BASE_URL = 'http://localhost:5000';

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
    console.log(newUser);
    const loginRes = await axios.post(`${BASE_URL}/users/add`, newUser);

    if (loginRes.status === 200) {
      const loginRes = await axios.post(`${BASE_URL}/users/login`, newUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem('auth-token', loginRes.data.token);
      history.push('/');
    }
  };

  return (
    <div>
      <h1 className="rank-title"> Registration Form </h1>
      <Form className="register-form" onSubmit={onFormSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="skillLevel">
            <Form.Label>Skill Level</Form.Label>
            <Form.Control
              type="text"
              placeholder="Skill Level"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="about">
          <Form.Label>About</Form.Label>
          <Form.Control
            placeholder="Tell us about yourself."
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={city}
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="zipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="text"
              value={zipcode}
              placeholder="zipcode"
              onChange={(event) => setZipcode(event.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              onChange={(event) => setAvailability(event.target.value)}
              as="select"
              value={availability}
              defaultValue="Choose..."
            >
              <option>Choose...</option>
              <option>Weekends</option>
              <option>Weekdays</option>
              <option>Mornings</option>
              <option>Afternoons</option>
              <option>Evenings</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip" className="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewUserForm;
