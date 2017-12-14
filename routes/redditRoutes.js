'use strict';
module.exports = function(app) {
  var redditController = require('../controllers/redditController');

  // Reddit routes
  app.route('/reddit/:subreddit').get(redditController.make_reddit_request);
};
