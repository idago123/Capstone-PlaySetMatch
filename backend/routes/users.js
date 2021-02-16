const router = require('express').Router();
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  console.log('test100003');
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log('test23');
  const username = req.body.username;
  const availability = req.body.availability;
  const zipcode = req.body.zipcode;
  const city = req.body.city;
  const image = req.body.image;
  const skillLevel = req.body.skill;
  const bio = req.body.bio;
  console.log(req.body);
  const newUser = new User({
    username,
    availability,
    zipcode,
    city,
    image,
    skillLevel,
    bio,
  });
  console.log(newUser);
  newUser
    .save()
    .then(() => res.json(`${newUser.username} added`))
    // .catch((err) => {
    //   throw err;
    // });
    .catch((err) => {
      console.log(err);
      res.status(400).json('Error: ' + err);
    });
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

// router.post('/login'), async (req, res) => {
router.route('/login').post(async (req, res) => {
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
        username: user.username, //new stuff below
        availability: user.availability,
        skillLevel: user.skillLevel,
        city: user.city,
        zipcode: user.zipcode,
        image: user.image,
        bio: user.bio,
        inbox: user.inbox,
        sentMsg: user.sentMsg,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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
      // user.inbox = req.body.inbox;
      user
        .save()
        .then(() => res.json(`${user.username} updated!!!!`))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/tokenIsValid').post(async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.route('/matches/:id').get((req, res) => {
  const userPromise = User.findById(req.params.id);
  const usersPromise = User.find();
  console.log(userPromise, usersPromise);
  Promise.all([userPromise, usersPromise])
    .then(([user, users]) => {
      const matches = [];
      for (const u of users) {
        if (u.id === user.id) {
          continue;
        }
        if (
          (u.zipcode === user.zipcode || u.city === user.city) &&
          u.availability === user.availability &&
          u.skillLevel === user.skillLevel
        ) {
          matches.push(u);
        }
        // if (u.zipcode === user.zipcode) {
        //   matches.push(u);
        // }
      }
      res.status(200).json(matches);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/message').post((req, res) => {
  const senderPromise = User.findById(req.body.from);
  const receiverPromise = User.findById(req.body.to);
  Promise.all([senderPromise, receiverPromise])

    .then(([sender, receiver]) => {
      console.log(req.body);
      // console.log(receiver);

      sender.sentMsg.push(req.body);
      console.log(sender);

      receiver.inbox.push(req.body);
      console.log(receiver);
      sender.save();
      receiver.save();
      // receiver.save().then((data) => res.json(data));
      // return Promise.all([sender.save, receiver.save]);
    })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;
