'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:EditcontentsCtrl
 * @description
 * # EditcontentsCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('EditcontentsCtrl', function ($scope, $routeParams, $firebaseObject, FBURL) {
    $scope.showHints = true;
    var type = $routeParams.type;
    var id = $routeParams.id;
    var ref;
    if(type === 'materials'){
      ref = new Firebase(FBURL).child('materials').child(id);
    }
    else if(type ==='chapters'){
      ref = new Firebase(FBURL).child('chapters').child(id);
    }

    $scope.update = function(cnt){
      $scope.cnt.$save();
    }
    $scope.cnt = $firebaseObject(ref)
    console.log($scope.type + ': ' +  $scope.id)
  });
