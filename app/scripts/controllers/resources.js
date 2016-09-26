'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('ResourcesCtrl', function ($scope, notification, FBURL, $firebaseArray) {
    var blogRef = firebase.database().ref().child('write');//.child('title');
    blogRef = blogRef.limit(7);
    $scope.blogs = $firebaseArray(blogRef);
  });
