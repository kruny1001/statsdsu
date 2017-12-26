'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:EditclassCtrl
 * @description
 * # EditclassCtrl
 * Controller of the statsdsuApp
 
 Need Hide 
 Need callback from dragula 

 */
angular.module('statsdsuApp')
  .controller('EditclassCtrl', function ($scope, Class, Course, Chapter, dragulaService) {
    dragulaService.options($scope, 'test-bag', {
      drop: function (el, source, handle, sibling) {
        return true; // elements are always draggable by default
      },
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      },
      removeOnSpill: true
    });

    $scope.classes =  Class.list()
    $scope.classes.$loaded(function(result){
      // result.forEach(function(classObj, index){
      //   // console.log(classObj)
      //   // classObj.$priority = index
      //   // $scope.classes.$save(classObj)
      // })
    })
    $scope.expandCourse = function(){
      $scope.classes.forEach(function(element, index) {
        element.courses = Course.listQuery(element.$id)
      });
    }
    $scope.expandChapter = function(){
      $scope.classes.forEach(function(element) {
        element.courses.forEach(function(course){
          course.chapters = Chapter.listQuery(course.$id)
        })
      });
    }
    // classes
    $scope.setPriority = function(){
      $scope.classes.forEach(function(classObj, index){
        classObj.$priority = index
        $scope.classes.$save(classObj)
      })
    }
  });
