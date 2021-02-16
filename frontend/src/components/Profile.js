import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContent';
import { useHistory } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Form } from 'react-bootstrap';
import tennisball3 from '../image/tennisball3.png';

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
              onChange={(event) => setSkill(event.target.value)}
              as="select"
              value={skill}
              defaultValue="Choose..."
            >
              <option>Choose...</option>
              <option>beginner</option>
              <option>intermediate</option>
              <option>advanced</option>
            </Form.Control>
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
          Edit Profile
        </Button>
      </Form>
    );
  };

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
                    {' '}
                    <h4 className="profile-field">Username: </h4>{' '}
                    <h4>{userData.user.username} </h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="profile-field">About: </h4>
                    <h4> {userData.user.bio}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="profile-field">Availability: </h4>
                    <h4> {userData.user.availability}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="profile-field">Skill Level: </h4>
                    <h4>{userData.user.skillLevel}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="profile-field">City: </h4>{' '}
                    <h4> {userData.user.city}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="profile-field">Zipcode: </h4>{' '}
                    <h4>{userData.user.zipcode}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="profile-field"> Image: </h4>{' '}
                    <h4>
                      {' '}
                      <Image src={userData.user.image} thumbnail />
                    </h4>
                  </Col>
                </Row>
              </div>
              <div className="edit form">
                <Col>
                  {' '}
                  {/* <Button
                    variant="dark"
                    type="submit"
                    onClick={() => setToggle(!toggle)}
                  >
                    Edit Profile
                  </Button> */}
                </Col>
              </div>
            </Container>
          </Col>
          <Col>
            {/* {toggle ? editForm() : null} */}
            {editForm()}
            <div className="front-image">
              <Image src={tennisball3} alt="tennis" fluid />{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
