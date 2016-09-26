
/**
 * @ngdoc function
 * @name statsdsuApp.directive:ngHideAuth
 * @description
 * # ngHideAuthDirective
 * A directive that shows elements only when user is logged out. It also waits for Auth
 * to be initialized so there is no initial flashing of incorrect state.
 */
angular.module('statsdsuApp')
  .directive('ngHideAuth', ['AuthApp', '$timeout', function (AuthApp, $timeout) {
    'use strict';

    return {
      restrict: 'A',
      link: function(scope, el) {
        el.addClass('ng-cloak'); // hide until we process it
        function update() {
          // sometimes if ngCloak exists on same element, they argue, so make sure that
          // this one always runs last for reliability
          $timeout(function () {
            el.toggleClass('ng-cloak', !!AuthApp.$getAuth());
          }, 0);
        }

        AuthApp.$onAuthStateChanged(update);
        update();
      }
    };
  }]);
