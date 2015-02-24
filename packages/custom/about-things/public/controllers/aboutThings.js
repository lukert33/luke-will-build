'use strict';

/* jshint -W098 */
angular.module('mean.about-things').controller('AboutThingsController', ['$scope', 'Global', 'AboutThings',
  function($scope, Global, AboutThings) {
    $scope.global = Global;
    $scope.package = {
      name: 'about-things'
    };
  }
]);
