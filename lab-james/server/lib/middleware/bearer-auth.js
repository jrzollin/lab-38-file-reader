'use strict';

const jwt = require('jsonwebtoken');
const User = require('../../models/user.js');

module.exports = (req, res, next) => {

  if(!req.headers.authorization){
    throw new Error('Authorization needed');
  }

  let token = req.headers.authorization.split('Bearer ')[1];
  if(!token){
    throw new Error('Invalid Authorization');
  }

  let secret = process.env.APP_SECRET;
  let decodeToken = jwt.verify(token, secret);
  console.log('bearer auth ', decodeToken);
  req.userId = decodeToken.id;
  User.findOne({_id: req.userId})
    .then(user => {
      if(!user){
        next({statusCode: 403, err: new Error('User JWT invalid')});
      }

      req.user = user;
      next();
    });
};
