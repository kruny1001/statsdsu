'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:RegisterformCtrl
 * @description
 * # RegisterformCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('RegisterformCtrl', function ($scope, ResearchFormService) {

    $scope.submit = function(){
      var promise = ResearchFormService.addNewResearch($scope.data);
      promise.then(function(result){}, fun)
    }
  });
