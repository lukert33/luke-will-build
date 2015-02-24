'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(AboutThings, app, auth, database) {

  app.get('/aboutThings/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/aboutThings/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/aboutThings/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/aboutThings/example/render', function(req, res, next) {
    AboutThings.render('index', {
      package: 'about-things'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
