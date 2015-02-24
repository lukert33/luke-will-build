'use strict';

angular.module('mean.about-things').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('aboutThings example page', {
      url: '/aboutThings/example',
      templateUrl: 'about-things/views/index.html'
    });
  }
]);
