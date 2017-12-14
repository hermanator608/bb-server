'use strict';
var redditScanner = require('../redditScanner/redditScanner');

exports.make_reddit_request = function(req, res) {
  console.log('In make_reddit_request ' + req.params.subreddit);
  if(!req.params.subreddit){
    res.status(403).end();
    return;
  }

  console.log(req.params.subreddit);

  var results = redditScanner.getRedditPosts(req.params.subreddit, req.params.before, function(err, result) {
    res.json(result)
  });
};
