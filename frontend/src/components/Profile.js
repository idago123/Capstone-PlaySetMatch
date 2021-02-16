import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Form } from 'react-bootstrap';

// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://play-set-match-api.herokuapp.com';

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [username, setUsername] = useState(userData.user.username);
  const [skill, setSkill] = useState(userData.user.skillLevel);
  const [availability, setAvailability] = useState(userData.user.availability);
  const [bio, setBio] = useState(userData.user.bio);
  const [image, setImage] = useState(userData.user.image);
  const [city, setCity] = useState(userData.user.city);
  const [zipcode, setZipcode] = useState(userData.user.zipcode);
  const [toggle, setToggle] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const editUser = {
      username,
      skillLevel: skill,
      availability,
      city,
      zipcode,
      bio,
      image,
    };
    const editResponse = await axios.post(
      `${BASE_URL}/users/update/${userData.user.id}`,
      editUser
    );
    console.log({ editResponse });
    setUserData({
      user: { ...userData.user, ...editUser }, // spreading old user data into a new object, adding changed fields
    });
  };

  const editForm = () => {
    return (
      <Form onSubmit={onFormSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder={`${userData.user.username}`}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="skillLevel">
            <Form.Label>Skill Level</Form.Label>
            <Form.Control
              type="text"
              //   placeholder={
              //     userData.user.skillLevel ? `${userData.user.skillLevel}` : ''
              //   }
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="about">
          <Form.Label>About</Form.Label>
          <Form.Control
            placeholder={userData.user.bio ? `${userData.user.bio}` : ''}
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="city"
              placeholder={`${userData.user.city}`}
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="zipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="zipcode"
              placeholder={`${userData.user.zipcode}`}
              value={zipcode}
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
    );
  };
  console.log(userData);

  return (
    <div className="edit-form">
      <h1 className="rank-title"> View or Edit Your Profile Information</h1>
      <Container>
        <Row>
          <Col>
            <Container className="current-profile">
              <div className="current-info">
                <Row>
                  <Col>
                    <h2>Username: {userData.user.username}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Bio: {userData.user.bio}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Availability: {userData.user.availability}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Skill Level: {userData.user.skillLevel}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>City: {userData.user.city}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Zipcode: {userData.user.zipcode}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>
                      Image: <Image src={userData.user.image} thumbnail />
                    </h2>
                  </Col>
                </Row>
              </div>
              <div className="edit form">
                <Col>
                  {' '}
                  <Button
                    variant="dark"
                    type="submit"
                    onClick={() => setToggle(!toggle)}
                  >
                    Edit Profile
                  </Button>
                </Col>
              </div>
            </Container>
          </Col>
          <Col>{toggle ? editForm() : null}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
