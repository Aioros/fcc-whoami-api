var express = require('express');
var app = express();

app.get('*', function (req, res) {
  
  res.send({
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'].split(",")[0],
    software: req.headers['user-agent'].replace(/[^(]*\(([^\)]*)\).*/, "$1")//req.headers['user-agent'].replace(/[^(]*(\([^)]\)).*/, "$1")
  });
  
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App listening');
})