'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.class
 * @description
 * # class
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('Class', function (FBURL, $firebaseArray) {

    var ref = new Firebase(FBURL);
    var classRef = ref.child('classes');

    // Public API here
    return {
      //classObj

      create: function(classObj){
        var newClassRef = classRef.push();
        newClassRef.set(classObj);
      },

      list: function(){
        return $firebaseArray(classRef);
      },
      remove: function(id){

      }
    };
  });
