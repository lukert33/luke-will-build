'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var AboutThings = new Module('about-things');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
AboutThings.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  AboutThings.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  AboutThings.menus.add({
    title: 'aboutThings example page',
    link: 'aboutThings example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  AboutThings.aggregateAsset('css', 'aboutThings.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    AboutThings.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    AboutThings.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    AboutThings.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return AboutThings;
});
