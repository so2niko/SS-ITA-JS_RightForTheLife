const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserScheme = require('../models/UserSchema.js');
const UserModel = mongoose.connection.model('User', UserScheme);


router.post('/signin', (req, res, next) => {
  if (req.body.hasOwnProperty('password') && req.body.hasOwnProperty('email')) {
    UserModel.find({ email: req.body.email }).exec()
      .then(user => {
        if (user.length > 0) {
          res.status(422).json({ error: 'invalid user data!' });
        } else {
          bcrypt.hash(req.body.password, 10, (errHash, hash) => {
            if (errHash) {
              console.log(errHash);
              res.status(500).json({ error: errHash });
            } else {
              new UserModel({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email || '',
                password: hash,
                username: req.body.username || '',
              }).save()
                .then(() => {
                  res.status(200).end();
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({ error: 'some db error' });
                });
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    return res.status(400).json({ error: 'no data' });
  }
});

router.post('/signup', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email && password) {
    UserModel.findOne({ email: email })
      .then(user => {
        bcrypt.compare(password, user.password, (err, result) => {
          console.log(result);
          if (result) {
            res.status(200).end();
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(401).end();
      });
  }
});

module.exports = router;