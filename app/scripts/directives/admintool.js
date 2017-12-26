'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:adminTool
 * @description
 * # adminTool
 */
angular.module('statsdsuApp')
  .directive('adminTool', function () {
    return {
      templateUrl: 'views/admin/admin-tool.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });