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
  .factory('Chapter', function ($q, FBURL, $firebaseArray, $firebaseObject) {

    var ref = firebase.database().ref()
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
        console.log(chapterRef)
        chapterObj.pubStatus = true;
        chapterObj.createdAt = firebase.database.ServerValue.TIMESTAMP
        newChapterRef.set(chapterObj);

      },
      getChapter: function(chapterId){
        return $firebaseObject(chapterRef.child(chapterId));
      },
      list: function(){
        return $firebaseArray(classRef);
      },
        listByCourseId:function(courseId){
            var listChapterRef = firebase.database().ref().child('chapters')
                .orderByChild('parentCourseId').equalTo(courseId);
            return $firebaseArray(listChapterRef);
        },
        addMaterial: function(materialObj){
            return $q(function(resolve, resect){
              var newMaterial = materialRef.push();
              newMaterial.set(materialObj, function(error){
                if(error){
                  console.log(error)
                  reject('Error: '+ error);
                }

                else
                  resolve('Success');
              });
            })
        },
        listMaterials: function(chapterId){
            var listMaterialRef = firebase.database().ref().child('materials')
                .orderByChild('parentChapterId').equalTo(chapterId);
            return $firebaseArray(listMaterialRef);
        },
        removeMaterial: function(materialId, courseId){
            //var newMaterial = chapterRef.child(courseId).child('materials').push();
            //newMaterial.set(materialObj);
        },
        addChallenge: function(challengeObj){
          return $q(function(resolve, resect){
            var newChallenge = challengeRef.push();
            newChallenge.set(challengeObj, function(error){
              if(error)
                reject('Error: '+ error);
              else
                resolve('Success');
            });
          })
        },
        listChallenges: function(){

        },
        removeChallenge: function(challengeObj){

        }

    };
  });
