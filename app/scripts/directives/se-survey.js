'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:seSurvey
 * @description
 * # seSurvey
 */
angular.module('statsdsuApp')
  .directive('seSurvey', function ($firebaseArray) {
    return {
      templateUrl: 'views/templates/superEditor/se-survey.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var ref = firebase.database().ref('survey/2016')
        scope.surveyResult = $firebaseArray(ref);
      }
    };
  });