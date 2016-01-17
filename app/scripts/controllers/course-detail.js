'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:CourseDetailCtrl
 * @description
 * # CourseDetailCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('CourseDetailCtrl', function ($scope, $routeParams,
    Course, Chapter
  ) {
    console.log('d');
    var courseId = $routeParams.id;
    $scope.chapterList = Chapter.listByCourseId(courseId);
      $scope.chapterList.$loaded().then(function(val){
          val.forEach(function(chapter, index){
              console.log(chapter.$id);
              var materials = Chapter.listMaterials(chapter.$id);
              materials.$loaded().then(function(data){
                  console.log(data);
                  $scope.chapterList[index].materials = data;
                 // $scope.$digest();
              })
          })
      })
    $scope.courseInfo = Course.getInfo(courseId);
    $scope.courseInfo.$loaded().then(function(data){console.log(data)})
  });
