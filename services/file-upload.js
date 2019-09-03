require("dotenv").config();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION
})

 
const s3 = new aws.S3() 
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'prime-images-1',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA!'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + ".jpeg")
    }
  })
})

module.exports = upload;