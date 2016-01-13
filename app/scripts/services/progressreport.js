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
    var progressRef = ref.child('progress').child(userAuth);

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
      }
    };
  });
