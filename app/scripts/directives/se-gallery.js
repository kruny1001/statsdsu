'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:seGallery
 * @description
 * # seGallery
 */
angular.module('statsdsuApp')
  .directive('seGallery', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the seGallery directive');
      }
    };
  });