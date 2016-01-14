'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:CourseDetailCtrl
 * @description
 * # CourseDetailCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('CourseDetailCtrl', function ($scope, $routeParams,
    Course
  ) {
    console.log('d');
    var courseId = $routeParams.id;
    $scope.courseInfo = Course.getInfo(courseId);
    $scope.courseInfo.$loaded().then(function(data){console.log(data)})
  });