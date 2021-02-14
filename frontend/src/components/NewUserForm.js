import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Col } from 'react-bootstrap';

// const BASE_URL = 'http://localhost:5000';

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
    const loginRes = await axios.post(
      `${process.env.API_URL}/users/add`,
      newUser
    );

    if (loginRes.status === 200) {
      const loginRes = await axios.post(
        `${process.env.API_URL}/users/login`,
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
            type="skill"
            placeholder="Skill Level"
            onChange={(event) => setSkill(event.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="about">
        <Form.Label>About</Form.Label>
        <Form.Control
          placeholder="Tell us about yourself."
          onChange={(event) => setBio(event.target.value)}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="city"
            placeholder="Enter city"
            onChange={(event) => setCity(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="zipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="zipcode"
            placeholder="Skill Level"
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
          <Form.Control onChange={(event) => setImage(event.target.value)} />
        </Form.Group>
      </Form.Row>
      {/* <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Regular file input</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div> */}
      {/* <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    // <form
    //   className="new-user-form"
    //   onSubmit={onFormSubmit}
    //   data-testid="NewUserForm--form"
    // >
    //   <div>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       id="username"
    //       name="username"
    //       onChange={(event) => setUsername(event.target.value)}
    //       value={username}
    //       className="username"
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="skill">Skill Level:</label>
    //     <input
    //       id="skill"
    //       name="skill"
    //       onChange={(event) => setSkill(event.target.value)}
    //       value={skill}
    //       className="skill"
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="availability">Availability:</label>
    //     <input
    //       id="availability"
    //       name="availability"
    //       onChange={(event) => setAvailability(event.target.value)}
    //       value={availability}
    //       className="availability"
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="city">City:</label>
    //     <input
    //       id="city"
    //       name="city"
    //       onChange={(event) => setCity(event.target.value)}
    //       value={city}
    //       className="city"
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="zipcode">Zipcode:</label>
    //     <input
    //       id="zipcode"
    //       name="zipcode"
    //       onChange={(event) => setZipcode(event.target.value)}
    //       value={zipcode}
    //       className="zipcode"
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="bio">About:</label>
    //     <input
    //       id="bio"
    //       name="bio"
    //       onChange={(event) => setBio(event.target.value)}
    //       value={bio}
    //       className="bio"
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="image">Image:</label>
    //     <input
    //       id="image"
    //       name="image"
    //       onChange={(event) => setImage(event.target.value)}
    //       value={image}
    //       className="image"
    //     />
    //   </div>
    //   <input type="submit" value="Add User" />
    // </form>
  );
};

export default NewUserForm;
