'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:UserListCtrl
 * @description
 * # UserListCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('UserListCtrl', function ($scope, $firebaseArray, FBURL) {
    var usersRef = new Firebase(FBURL).child('newUsers');
    $scope.users = $firebaseArray(usersRef);

    $scope.sendEmail = function(){
      //send email

    }
  });
