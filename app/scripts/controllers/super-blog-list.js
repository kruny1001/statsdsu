'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:SuperBlogListCtrl
 * @description
 * # SuperBlogListCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('SuperBlogListCtrl', function ($scope, FBURL, $firebaseArray) {
    var ref = new Firebase(FBURL).child('materials-test')
    $scope.materials = $firebaseArray(ref);
  });
