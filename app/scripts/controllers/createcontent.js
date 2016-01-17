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
      $scope.loadClassesForChapter = function(){
          var classRef = new Firebase(FBURL).child('classes')
              .orderByChild('title');
          $scope.classesForChapter = $firebaseArray(classRef);
      }
      $scope.loadCourseForChapter = function(targetClassId){
          var courseRef = new Firebase(FBURL).child('courses')
              .orderByChild('parentClass/id').equalTo(targetClassId);
          $scope.coursesForChapter = $firebaseArray(courseRef);
      }

    $scope.createChapter = function(){
        var parentClassId = $scope.parentClass.$id;
        var parentCourseId = $scope.parentCourse.$id;
        $scope.chapter.parentClassId = parentClassId;
        $scope.chapter.parentCourseId = parentCourseId;
        $scope.chapter.instructor={uid: user.uid, provider: user.provider};
        Chapter.create($scope.chapter);
    }

    //Material
      $scope.loadChapterForCourser = function(targetCourseId){
          var chapterRef = new Firebase(FBURL).child('chapters')
              .orderByChild('parentCourseId').equalTo(targetCourseId);
          $scope.chapterForCourse = $firebaseArray(chapterRef);
      }
    $scope.createMaterial = function(){
        $scope.material.parentChapterId = $scope.parentChapter.$id;
        $scope.material.parentCourseId = $scope.parentCourse.$id;
        $scope.material.parentClassId = $scope.parentClass.$id;
        Chapter.addMaterial($scope.material);
    }

    //Challenge
    $scope.createChallenge = function(){
        $scope.challenge.parentChapterId = $scope.parentCourse.$id;
        $scope.challenge.parentClassId = $scope.parentClass.$id;
        Chapter.addChallenge($scope.challenge);
    }

      //Test List Materials
      $scope.listMaterials = Chapter.listMaterials("-K89qh0lojthsPkGiLmU");
  });
