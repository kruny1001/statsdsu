'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:profileHeader
 * @description
 * # profileHeader
 * Website header directive
 *
 */
angular.module('statsdsuApp')
  .directive('profileHeader', function (AuthApp, $location) {
    return {
      templateUrl: 'views/templates/profile/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.logout = function() { AuthApp.$signOut(); };
        scope.menus = [
          {name:"Login", dest:"login"},
          {name:"Account", dest:"account"},
          {name:"Logout", dest:"", action:"logout"}
        ]

        scope.actionMenu = function(target){
          if(target.dest !== "")
          {
            $location.path(target.dest);
          }
          else{
            if(target.action ==="logout")
              scope.logout();
          }
        }

      }
    };
  });