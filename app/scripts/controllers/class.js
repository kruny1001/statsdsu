'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:ClassCtrl
 * @description
 * # ClassCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('ClassCtrl', function ($scope, $routeParams,
    Class
  ) {
    var classId = $routeParams.id;
    $scope.classInfo = Class.getInfo(classId);

  });
