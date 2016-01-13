'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.course
 * @description
 * # course
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('Course', function (FBURL, $firebaseArray) {

    // Public API here
    return {
      create: function () {

      },
      list: function(){
        return $firebaseArray(classRef);
      },

    };
  });
