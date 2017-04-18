const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const Img = require('./imgModel');
const jwt = require('express-jwt');
require('dotenv').config();

const authCheck = jwt({
  secret: process.env.SECRET,
})

const router = express.Router();

router.post('/img', authCheck, (req, res) => {
  User.findOrCreate({user: req.user.sub}, (err, user) => {
      if(err) {
        res.status(400).send(err);
      }
      user.picture = req.body.user.picture;
      user.nick = req.body.user.nickname;

      let img = new Img ({
        creator: user._id,
        url: req.body.imgData.Url,
        description: req.body.imgData.Description,
        shares: 0,
        time: + new Date()
      });
      img.save();
      user.images.push(img);
      user.save().then(()=> {
        res.send(img);
      });
  })
});

router.get('/getMyPics', authCheck, (req, res) => {
  User.find({user: req.user.sub}).populate('images').exec((err, user) => {
      if (err) {
        return res.status(400).send(err);
      };
      return res.send(user);
  })
});

router.get('/getAllPics', (req, res) => {
  Img.find({}).populate('creator').exec((err, users) => {
      if (err) {
        return res.status(400).send(err);
      };
      return res.send(users);
  })
})

router.post('/deletePic', authCheck, (req, res) => {
  Img.findByIdAndRemove(req.body.pic, (err) => {
    if (err) {
      console.log(err);
    }
  });
  User.findOne({user: req.user.sub}, (err, user) => {
    if (err) {
      return res.status(400).send(err)
    };

    user.images = user.images.filter(val => {
      if (val != req.body.pic) {
        return val
      }
    })
    user.save().then(() => {
      res.send('removed');
    })
  })
})

router.post('/likePic', authCheck, (req, res) => {
  Img.findById(req.body.pic, (err, img) => {
    if (err) {
      return res.status(400).send(err)
    };

    if (img.likes.includes(req.user.sub)) {
      img.likes = img.likes.filter( i => {
        if (i != req.user.sub) {
          return i
        }
      });
    } else {
      img.likes.push(req.user.sub);
    };

    img.save().then(() => {
      res.send(img.likes);
    })
  })
})

router.post('/findUser', (req, res) => {
  User.findById(req.body.id).populate('images').exec((err, user) => {
      if (err) {
        return res.status(400).send(err);
      };
      return res.send(user);
  })
})

module.exports = router;
