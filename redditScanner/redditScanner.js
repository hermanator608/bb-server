var https = require('https');

exports.getRedditPosts = function (redditSubModule, before = null, callback) {
  var url;
  if(before){
    url = "https://www.reddit.com/r/" + redditSubModule + "/top/.json?limit=50&before=" + before;
  } else {
    url = "https://www.reddit.com/r/" + redditSubModule + "/top/.json?limit=50";
  }

  https.get(url, function(response) {
    var json = '';
    response.on('data', function(chunk) {
      json += chunk;
    });

    response.on('end', function() {
      var redditResponse = JSON.parse(json);
      var newJson = {
        posts:[]
      };
      redditResponse.data.children.forEach(function(child) {
        if(child.data.domain !== 'self.node' && child.data.url && child.data.title) {
          newJson.posts.push({
            title: child.data.title,
            imageUrl: child.data.url
          });
        }
      });
      callback(null, newJson);
    })
  }).on('error', function(err) {
    callback(err, null);
  });
}
