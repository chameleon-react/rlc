var express = require('express');
var router = express.Router();
var multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/../image/`)
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.name}.png`)
        console.log(file)
    }
  })
  

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../gallery/`)
  },
  filename: function (req, file, cb) {
      cb(null, `${req.body.name}${file.originalname.split('.')[0]}.png`)
      console.log(file)
  }
})

const upload = multer({ storage: storage })
const gallery = multer({storage:storage2})


router.post('/profile', upload.single('profile'), (req, res) => {
  console.log(req.body)
    res.send(true)
})

router.post('/gallery', gallery.array('photos',5),(req,res)=>{
  res.send(true)
})

module.exports = router