

var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();


let multer = require("multer");//multer npm package

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  let responseObject = {};
  console.log(req.file);
  responseObject["name"]=req.file.originalname;
  responseObject["type"]=req.file.mimetype;
  responseObject["size"]=req.file.size;
  res.json(responseObject);
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
