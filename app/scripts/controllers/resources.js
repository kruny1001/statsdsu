'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('ResourcesCtrl', function ($scope, notification, Ref, Auth, FBURL, $firebaseArray) {
    var blogRef = new Firebase(FBURL +'/write');//.child('title');
    blogRef = blogRef.limit(7);
    $scope.blogs = $firebaseArray(blogRef);
  });
