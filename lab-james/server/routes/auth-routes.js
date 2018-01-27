'use strict';

const User = require('../models/user.js');
const basicHTTP = require('../lib/middleware/basicHTTP.js');
const jsonParser = require('body-parser').json();
const bearerAuth = require('../lib/middleware/bearer-auth.js');

const authRouter = module.exports = require('express').Router();

authRouter.post('/createUser', jsonParser, (req, res, next) => {
  if(!req.body.username){
    return(
      res.writeHead(400),
      res.write('Username required'),
      res.end()
    );
  }

  if(!req.body.password){
    return(
      res.writeHead(400),
      res.write('Password required'),
      res.end()
    );
  }

  const password = req.body.password;
  delete req.body.password;

  let newUser = new User(req.body);
  newUser.hashPass(password)
    .then(user => {
      user.save()
        .then(user => {
          let token = user.generateToken();
          res.cookie('auth', token, {maxAge: 900000});
          res.send({user, token});
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});

authRouter.get('/findUser', basicHTTP, (req, res, next) => {
  User.findOne({username: req.auth.username})
    .then(user => {
      if(!user){
        next({statusCode: 404, message: 'User not found'});
      }

      user.checkPass(req.auth.password)
        .then(user => {
          let token = user.generateToken();
          res.cookie('auth', token, {maxAge: 900000});
          res.send({user, token});
        })
        .catch( () => {
          next({statusCode: 401, message: 'Invalid password'});
        });
    })
    .catch(err => {
      next(err);
    });
});

authRouter.get('/auth/findUser', bearerAuth, (req, res, next) => {
  User.findOne({_id: req.user._id})
    .then(user => {
      let token = user.generateToken();
      res.cookie('auth', token, {maxAge: 900000});
      res.send({user, token});
    })
    .catch(err => {
      next(err);
    });
});

authRouter.put('/updateUser/:id', jsonParser, bearerAuth, (req, res, next) => {

});
