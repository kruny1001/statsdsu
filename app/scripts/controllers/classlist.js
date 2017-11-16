'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:ClasslistCtrl
 * @description
 * # ClasslistCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('ClasslistCtrl', function ($scope, $location,$interval,$firebaseObject,
                                         Class, Course
  ) {

    var ref = firebase.database().ref();
    $scope.crntPage = $firebaseObject(ref.child('crntUrl'));
    $scope.crntPage.$loaded().then(function(snap){
      snap.path = 'account'
      snap.$save();
    })

    $scope.classes = Class.list();
    $scope.courses = Course.list();

    TweenMax.from('.logo', 1, {opacity:0.5, rotation:45});
    $scope.goto = function(path){
      $location.path( path );
    }
  });
