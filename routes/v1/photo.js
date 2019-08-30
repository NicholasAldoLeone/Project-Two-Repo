const router = require("express").Router();
const upload = require('../../services/file-upload');

const singleUpload = upload.single('image');

router.post('/image-upload', function (req, res) {
    singleUpload(req, res, function(err) {
        console.log(req.file);
        return res.json({'imageUrl': req.file.location})
    });

});


module.exports = router;
