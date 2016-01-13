'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.chapter
 * @description
 * # chapter
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('Chapter', function (FBURL, $firebaseArray) {

    // Public API here
    return {
      create: function () {

      },
      list: function(){
        return $firebaseArray(classRef);
      },
    };
  });
