'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:NotificationCtrl
 * @description
 * # NotificationCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('NotificationCtrl', function ($scope, $location, notification) {
    $scope.notis = notification.listNotification();

    $scope.checkNoti = function(index){
      var docId = $scope.notis[index].targetDocId;
      //Remove TargetNotification
      $scope.notis.$remove($scope.notis[index]).then(function(ref) {
        $location.path('read/'+docId);
      });
    }

    $scope.path = function(index){
      var docId = $scope.notis[index].targetDocId;
      $location.path('read/'+docId);
    }
  });
