'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:VirtualMenusCtrl
 * @description
 * # VirtualMenusCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('VirtualMenusCtrl', function ($scope, $rootScope, $firebaseObject) {
    $rootScope.targetApp = false;
    var ref = firebase.database().ref().child('crntUrl');
    $scope.changePath = function(path){
      $rootScope.crntPage = $firebaseObject(ref)

      //Save current Location
      $rootScope.crntPage.$loaded().then(function(snap){
        snap.path = path;
        snap.$save();
      })

    }

  });
