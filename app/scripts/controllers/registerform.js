'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:RegisterformCtrl
 * @description
 * # RegisterformCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('RegisterformCtrl', function ($scope, $location, $mdDialog, $mdMedia, $log, FBURL, ResearchFormService) {

    $scope.submit = function(){
      var promise = ResearchFormService.addNewResearch($scope.data);
      promise.then(function(result){}, fun)
    }

    $scope.addNewUser = function(){
      var usersList = new Firebase(FBURL).child('newUsers');
      console.log($scope.userInfo);
      var newUser = usersList.child($scope.userInfo.phone);
      newUser.set($scope.userInfo);
      $scope.confirm();
    }

    $scope.confirm = function() {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      var confirm = $mdDialog.confirm()
        .title('Thank you')
        .textContent('We are going to send email if you are selected for this camp.')
        .ok('Okay')
        .targetEvent()

      $mdDialog.show(confirm)
        .then(function(result) {
          $location.path('/')
      });
    };
  });
