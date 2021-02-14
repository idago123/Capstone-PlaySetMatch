const router = require('express').Router();
const jwt = require('jsonwebtoken');
let Match = require('../models/match.model');

router.route('/').get((req, res) => {
  //   console.log('test100003');
  Match.find()
    .then((match) => res.json(match))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log('test23');
  const date = req.body.date;
  const winner = req.body.winner;
  const username = req.body.username;
  const tennisBuddy = req.body.tennisBuddy;
  const location = req.body.location;

  const newMatch = new Match({
    date,
    winner,
    username,
    tennisBuddy,
    location,
  });
  //   console.log(newMatch);
  newMatch
    .save()
    .then(() =>
      res.json(
        `${newMatch.winner} won the match against ${newMatch.tennisBuddy} on ${newMatch.date}`
      )
    )
    // .catch((err) => {
    //   throw err;
    // });
    .catch((err) => {
      console.log(err);
      res.status(400).json('Error: ' + err);
    });
});

module.exports = router;
