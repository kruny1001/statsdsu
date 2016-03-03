'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.progressReport
 * @description
 * # progressReport
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('progressReport',
  function (FBURL, $firebaseArray, $firebaseObject, Auth) {

    var userAuth = Auth.$getAuth();
    var ref = new Firebase(FBURL);
    console.log(userAuth);
    var progressRef = ref.child('progress').child(userAuth.uid);

    // Public API here
    return {
      getSubscribeList: function (courseType) {
        var refCourse = ref.child(courseType);
        return $firebaseArray(refCourse);
      },
      setSubscribes: function(courseType, cnt){
        var refCourse = ref.child(courseType);
        var courses = $firebaseArray(refCourse);
        courses.$add(cnt)
      },
      getProgress: function(courseType, index){
        var refCourse = ref.child(courseType);
        var courses = $firebaseArray(refCourse);
        courses.$remove(courses[index]);
      },
      updateProgress: function (courseType, index, cnt) {
        var refCourse = ref.child(courseType);
        var courses = $firebaseArray(refCourse);
        courses.$save(cnt);
      },
      updateSubscriptChpater: function(chapterId){
        //get Chapter Name
        var chapterRef = new Firebase(FBURL+'/chapters/'+chapterId);
        var chapterObj = $firebaseObject(chapterRef);
        console.log(chapterObj);
        //progressRef.child('').child('')
        var classObj = 0;
        var courseObj = 0;
      }
    };
  });
