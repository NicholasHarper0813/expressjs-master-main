var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var pagePhotos = [];
  var data = req.app.get('appData');
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'home'
  });
});

module.exports = router;
