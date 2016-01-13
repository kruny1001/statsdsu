'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:CreatecontentCtrl
 * @description
 * # CreatecontentCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('CreatecontentCtrl', function ($scope, user, FBURL, $firebaseObject, $firebaseArray,
    Class
  ) {
    $scope.userInfo = user;
    //$scope.class.instructor = $scope.userInfo.displayName;
    var classes = Class.list();
    classes.$loaded().then(function(data){
      console.log(data);
      $scope.classes = data;
    });

    $scope.createClass = function(){
      Class.create($scope.class);
    };
    //create class

    //create course
    //create chapter
    //create material
    //create challenge



  });
