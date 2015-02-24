'use strict';

/* jshint -W098 */
angular.module('mean.about-things').controller('AboutThingsController', ['$scope', '$stateParams', '$location', 'Global', 'AboutThings',
  function($scope, $stateParams, $location, Global, AboutThings) {
    $scope.global = Global;
    $scope.package = {
      name: 'about-things'
    };
  }
]);
