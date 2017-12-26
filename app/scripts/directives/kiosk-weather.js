'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:kioskWeather
 * @description
 * # kioskWeather
 */
angular.module('statsdsuApp')
  .directive('kioskWeather', function () {
    return {
      templateUrl: 'views/kiosk/base-kiosk.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }}
});
