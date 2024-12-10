var router = express.Router(); //chat+modify
var express = require('express');

router.get('/chat', function(req, res) {
  res.render('chat', {
    pageTitle: 'Chat',
    pageID: 'chat'
  });
});

module.exports = router;
