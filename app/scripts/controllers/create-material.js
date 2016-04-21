'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:CreateMaterialCtrl
 * @description
 * # CreateMaterialCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('CreateMaterialCtrl', function ($scope, FBURL, $firebaseArray) {
    $scope.createMaterial = function(){
      $scope.material.parentChapterId = $scope.parentChapter.$id;
      $scope.material.parentCourseId = $scope.parentCourse.$id;
      $scope.material.parentClassId = $scope.parentClass.$id;
      var promise = Chapter.addMaterial($scope.material);
      promise.then(
        function(result){alert(result); $scope.material.title = ""; $scope.material.description="";}
        , function(reason){alert(reason)})
    }

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

    //Material
    $scope.loadChapterForCourser = function(targetCourseId){
      var chapterRef = new Firebase(FBURL).child('chapters')
        .orderByChild('parentCourseId').equalTo(targetCourseId);
      $scope.chapterForCourse = $firebaseArray(chapterRef);
    }
  });
