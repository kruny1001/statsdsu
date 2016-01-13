'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:CreatecontentCtrl
 * @description
 * # CreatecontentCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('CreatecontentCtrl',
  function ($scope, user, FBURL, $firebaseObject, $firebaseArray,
    Class, Course
  ) {
    $scope.targetClass = null;
    $scope.userInfo = user;
    //$scope.class.instructor = $scope.userInfo.displayName;
    var classes = Class.list();
    classes.$loaded().then(function(data){
      console.log(data);
      $scope.classes = data;
    });

    //Class
    $scope.createClass = function(){
      //Update User Info
      $scope.class.instructor={uid: user.uid, provider: user.provider};
      Class.create($scope.class);
    };

    $scope.loadClasses = function() {
      var classRef = new Firebase(FBURL).child('classes');

      $scope.classes = $firebaseArray(classRef);
      };

    $scope.updateClass= function(){
      var id = $scope.targetClass.$id
      Class.update(id, $scope.targetClass);
    }

    //Course
    $scope.createCourse = function(){
      $scope.course.instructor={uid: user.uid, provider: user.provider};
      Course.create($scope.course);
    }

    //Chapter
    $scope.createChapter = function(){}

    //Material
    $scope.createMaterial = function(){}

    //Challenge
    $scope.createChallenge = function(){}

    //create course
    //create chapter
    //create material
    //create challenge



  });
