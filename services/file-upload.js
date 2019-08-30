const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: AWS-SECRET-ACCESS-KEY,
    accessKeyId: AWS-ACCESS-KEY,
    region: 'AWS-REGION'
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