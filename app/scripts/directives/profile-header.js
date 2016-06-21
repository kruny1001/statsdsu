'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:profileHeader
 * @description
 * # profileHeader
 */
angular.module('statsdsuApp')
  .directive('profileHeader', function (Auth) {
    return {
      templateUrl: 'views/templates/profile/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.logout = function() { Auth.$signOut(); };
      }
    };
  });