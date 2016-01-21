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
  .factory('Chapter', function (FBURL, $firebaseArray, $firebaseObject) {

    var ref = new Firebase(FBURL);
    var chapterRef = ref.child('chapters');
    var materialRef = ref.child('materials');
      var challengeRef = ref.child('challenges');
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
      getChapter: function(chapterId){
        return $firebaseObject(chapterRef.child(chapterId));
      },
      list: function(){
        return $firebaseArray(classRef);
      },
        listByCourseId:function(courseId){
            var listChapterRef = new Firebase(FBURL).child('chapters')
                .orderByChild('parentCourseId').equalTo(courseId);
            return $firebaseArray(listChapterRef);
        },
        addMaterial: function(materialObj){
            var newMaterial = materialRef.push();
            newMaterial.set(materialObj);
        },
        listMaterials: function(chapterId){
            var listMaterialRef = new Firebase(FBURL).child('materials')
                .orderByChild('parentChapterId').equalTo(chapterId);
            return $firebaseArray(listMaterialRef);
        },
        removeMaterial: function(materialId, courseId){
            //var newMaterial = chapterRef.child(courseId).child('materials').push();
            //newMaterial.set(materialObj);
        },
        addChallenge: function(challengeObj){
            var newChallenge = challengeRef.push();
            newChallenge.set(challengeObj);
        },
        listChallenges: function(){

        },
        removeChallenge: function(challengeObj){

        }

    };
  });
