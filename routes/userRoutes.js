'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // User routes
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);


  app.route('/user/:userId')
    .get(user.find_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);
};
