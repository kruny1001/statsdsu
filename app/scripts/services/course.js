'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.course
 * @description
 * # course
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('Course', function (FBURL, $firebaseObject, $firebaseArray) {

    var ref = new Firebase(FBURL);
    var courseRef = ref.child('courses');
    var onComplete = function(error) {
      if (error) {
        console.log('Remove Data failed');
      } else {
        console.log('Remove Data succeeded');
      }
    };

    // Public API here
    return {
      create: function(courseObj){
        var newCourseRef = courseRef.push();
        courseRef.pubStatus = true;
        courseRef.createdAt = Firebase.ServerValue.TIMESTAMP;
        newCourseRef.set(courseObj);
      },
      list: function(){
        return $firebaseArray(courseRef);
      },
      listQuery: function(classId){
        var query = courseRef.orderByChild('parentClass/id').equalTo(classId);
        return $firebaseArray(query);
      },
      getInfo: function(id){
        return $firebaseObject(courseRef.child(id));
      },
      addMaterial: function(material, courseId){
        var newMaterialRef = new Firebase(FBURL).child('material');
      },
      removeMaterial: function(materialId, courseId){
        var materialRef = new Firebase(FBURL).child('material');
        materialRef.child(materialId).remove(onComplete);
      },
      addChallenge: function(challenge, courseId){
        var newChallengeRef = new Firebase(FBURL).child('challenge');
      },
      removeChallenge: function(ChallengeId, courseId){
        var challengeRef = new Firebase(FBURL).child('challenge');
        challengeRef.child(ChallengeId).remove(onComplete);
      },
    };
  });
