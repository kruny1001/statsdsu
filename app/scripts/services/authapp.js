'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.AuthApp
 * @description
 * # AuthApp
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('AuthApp', function($firebaseAuth) {
    return $firebaseAuth(); //new
  });
