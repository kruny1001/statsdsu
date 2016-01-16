'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.chapter
 * @description
 * # chapter
 * Factory in the statsdsuApp.
 * Class > Course > Chapter
 */
angular.module('statsdsuApp')
  .factory('Chapter', function (FBURL, $firebaseArray) {

    var ref = new Firebase(FBURL);
    var chapterRef = ref.child('chapters');
    var materialRef = ref.child('materials');
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
        addMaterial: function(materialObj){
            var newMaterial = materialRef.push();
            newMaterial.set(materialObj);
        },
        removeMaterial: function(materialId, courseId){
            //var newMaterial = chapterRef.child(courseId).child('materials').push();
            //newMaterial.set(materialObj);
        }
    };
  });
