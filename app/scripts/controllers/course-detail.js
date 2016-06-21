'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:CourseDetailCtrl
 * @description
 * # CourseDetailCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('CourseDetailCtrl', function ($scope, $routeParams,$location,
                                            Course, Chapter, progressReport
  ) {
    var courseId = $routeParams.id;
    $scope.chapterList = Chapter.listByCourseId(courseId);
    $scope.chapterList.$loaded().then(function(val){
      val.forEach(function(chapter, index){
        var materials = Chapter.listMaterials(chapter.$id);
        materials.$loaded().then(function(data){
          $scope.chapterList[index].materials = data;
        })
      })
    })
    $scope.courseInfo = Course.getInfo(courseId);
    $scope.courseInfo.$loaded().then(function(data){console.log(data)})
    $scope.updateProgress = function(chapterId){
      //href="#/material-list/{{ch.$id}}"
      progressReport.updateSubscriptChpater(chapterId);
      $location.path('material-list/'+chapterId);
    }
  });
