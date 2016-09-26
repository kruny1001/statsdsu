'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('MenuCtrl', function ($scope, $firebaseObject){

    var ref = firebase.database().ref();
    $scope.crntPage = $firebaseObject(ref.child('crntUrl'));
    $scope.crntPage.$loaded().then(function(snap){
      snap.path = 'main'
      snap.$save();
    })
  });
