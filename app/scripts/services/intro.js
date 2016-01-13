'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.intro
 * @description
 * # intro
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('intro', function (FBURL, $firebaseArray) {

    var introRef = new Firebase(FBURL+'/introProblem');
    var visRef = new Firebase(FBURL+'/visProblem');
    // Service logic
    // ...

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      course: function(){
        return $firebaseArray(introRef);
      },
      courseVis: function() {
        return $firebaseArray(visRef);
      }
    };
  });
