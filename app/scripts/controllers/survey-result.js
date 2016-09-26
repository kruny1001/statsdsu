'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:SurveyResultCtrl
 * @description
 * # SurveyResultCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('SurveyResultCtrl', function ($scope, $firebaseArray) {
    var ref = firebase.database().ref('survey/2016')
    $scope.surveyResult = $firebaseArray(ref);

    $scope.action = function(){
      var button = $('.button-svg')
      TweenLite.from(button, 0.3, {scale: 1.4, transformOrigin:"50% 50%"})
    }


    $scope.prev = function(){}
    $scope.play = function(){}
    $scope.next = function(){}

  });
