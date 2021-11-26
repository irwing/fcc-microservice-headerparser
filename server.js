// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {

  var userAgent = req.headers['user-agent'];
  var acceptLanguage = req.headers["accept-language"];

  res.json({
    "ipaddress": req.ip,
    "language": acceptLanguage,
    "software": userAgent
  });
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
// process.env.PORT
var listener = app.listen(43000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
