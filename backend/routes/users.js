const router = require('express').Router();
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json(`${user.username} added`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json(`${user.username} deleted`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(`showing the user, ${user.username}`))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/login'),
  async (req, res) => {
    try {
      const { username } = req.body;
      if (!username)
        return res.status(400).json({ msg: 'username must be entered' });

      const user = await User.findOne({ username: username });
      if (!user)
        return res
          .status(400)
          .json({ msg: 'No account with this username is registered.' });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        token,
        user: {
          id: user._id,
          username: user.username,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.availability = req.body.availability;
      user.skillLevel = req.body.skillLevel;
      user.city = req.body.city;
      user.zipcode = req.body.zipcode;
      user.image = req.body.image;
      user.bio = req.body.bio;

      user
        .save()
        .then(() => res.json(`${user.username} updated!!!!`))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;