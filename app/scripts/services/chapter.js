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

    var ref = new Firebase(FBURL);
    var chapterRef = ref.child('chapters');
    var onComplete = function(error) {
      if (error) {
        console.log('Remove Data failed');
      } else {
        console.log('Remove Data succeeded');
      }
    };

    // Public API here
    return {
      create: function(chapterObj){
        var newChapterRef = chapterRef.push();
        chapterObj.pubStatus = true;
        chapterObj.createdAt = Firebase.ServerValue.TIMESTAMP;
        newChapterRef.set(chapterObj);
      },
      list: function(){
        return $firebaseArray(classRef);
      },
    };
  });
