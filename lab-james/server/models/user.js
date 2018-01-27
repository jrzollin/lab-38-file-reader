'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bluebird').promisifyAll(require('bcrypt'));
const aws = require('../lib/s3.js');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  avatar: {type: String, required: false},
});

userSchema.methods.attachFiles = function(files){
  let record = this;
  let file = files[0];
  let key = `${file.filename}-${file.originalname}`;

  return aws.upload(file.path, key)
    .then(url => {
      record.avatar = url;
      return record.save();
    })
    .catch(console.error);
};

userSchema.methods.hashPass = function(password){
  return bcrypt.hashAsync(password, 10)
    .then(hashedPass => {
      this.password = hashedPass;
      return this;
    })
    .catch(err => {
      console.log(err);
    });
};

userSchema.methods.checkPass = function(password){
  return bcrypt.compareAsync(password, this.password)
    .then(res => {
      if(res){
        return this;
      }

      throw new Error('Invalid password');
    })
    .catch(err => {
      console.log(err);
    });
};

userSchema.methods.generateToken = function(){
  return jwt.sign({id: this._id}, process.env.APP_SECRET || 'placeholder');
};

module.exports = mongoose.model('user', userSchema);
