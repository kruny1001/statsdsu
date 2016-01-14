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
    Class, Course, Chapter
  ) {
    $scope.targetClass = null;
    $scope.userInfo = user;
    //$scope.class.instructor = $scope.userInfo.displayName;
    var classes = Class.list();
    classes.$loaded().then(function(data){
      console.log(data);
      $scope.classes = data;
    });

    var courses = Course.list();
    courses.$loaded().then(function(data){
      console.log(data);
      $scope.courses = data;
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
      var parentClassId = $scope.parentClass.$id;
      var parentClassTitle = $scope.parentClass.title;
      $scope.course.instructor={uid: user.uid, provider: user.provider};
      $scope.course.parentClass = {id:parentClassId, title:parentClassTitle};
      Course.create($scope.course);
    }

    $scope.loadCourses = function(){
      var courseRef = new Firebase(FBURL).child('courses');
      $scope.courses = $firebaseArray(courseRef);
    }

    //Chapter
    $scope.createChapter = function(){
      var parentCourseId = $scope.parentCourse.$id;
      var parentCourseTitle = $scope.parentCourse.title;
      $scope.chapter.instructor={uid: user.uid, provider: user.provider};
      $scope.chapter.parentClass = {id:parentCourseId, title:parentCourseTitle};
      Chapter.create($scope.chapter);
    }

    //Material
    $scope.createMaterial = function(){}

    //Challenge
    $scope.createChallenge = function(){}

    //create course
    //create chapter
    //create material
    //create challenge



  });
