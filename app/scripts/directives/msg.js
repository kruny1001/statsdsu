// Core-Directive
// User Status
'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:msg
 * @description
 * # msg
 */
angular.module('statsdsuApp')
  .directive('msg', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Check User Status
        element.text('Messages: ')
        // Check Content Availability
        // Check Notifications
        // Check Payment Information
      }
    };
  });
