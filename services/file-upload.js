const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: 'AVRRlpy2Go+6YT5GGmE4Kb6/C0W7Mlzy3eqq4dCm',
    accessKeyId: 'AKIAIQCT5CDMYJHFNDKQ',
    region: 'us-east-2'
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