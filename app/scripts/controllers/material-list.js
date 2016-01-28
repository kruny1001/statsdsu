'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:MaterialListCtrl
 * @description
 * # MaterialListCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('MaterialListCtrl', function ($scope, $routeParams,
                                            Course, Chapter
  ) {

    $scope.targetMat = null;
    $scope.progressValue = 0;

    var chapterId = $routeParams.chapterId;
    $scope.chapterInfo = Chapter.getChapter(chapterId);
    $scope.materialList = Chapter.listMaterials(chapterId);

    $scope.setTargetMaterial = function(index){
      $scope.targetMat = $scope.materialList[index];

      $scope.progressValue = (index/$scope.materialList.length) * 100;
      //console.log(index, $scope.materialList.length)
    }

    $scope.runSrc = function(){
      var code='';

    }

  });
