'use strict';

const fs = require('fs-extra');
const aws = require('aws-sdk');
const s3 = new aws.S3();

const upload = (path, key) => {

  return s3.upload({
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fs.createReadStream(path),
  })
    .promise()
    .then(res => {
      console.log(res);
      return fs.remove(path)
        .then( () => res.Location);
    })
    .catch(err => {
      return fs.remove(path)
        .then( () => Promise.reject(err));
    });
};

const remove = key => {
  return s3.deleteObject({
    Key: key,
    Bucket: process.env.AWS_BUCKET,
  })
    .promise();
};

module.exports = {upload, remove};
