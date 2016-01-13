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
      create: function(classObj){
        var newClassRef = classRef.push();
        classObj.pubStatus = true;
        classObj.createdAt = Firebase.ServerValue.TIMESTAMP;
        newClassRef.set(classObj);
      },
      update: function(id, classObj){
        console.log(classObj);
        delete classObj.$$hashKey;
        delete classObj.$$mdSelectId;
        delete classObj.$priority;
        delete classObj.$id;
        classObj.updatedAt = Firebase.ServerValue.TIMESTAMP;
        classRef.child(id.toString()).update(classObj);
      },
      list: function(){
        return $firebaseArray(classRef);
      },
      remove: function(id){
        var onComplete = function(error) {
          if (error) {
            console.log('Remove Data failed');
          } else {
            console.log('Remove Data succeeded');
          }
        };
        classRef.child(id).remove(onComplete);
      },
      publish: function(id){
        classRef.child(id).update({pubStatus: true});
      },
      unpublish: function(id){
        classRef.child(id).update({pubStatus: false});
      }
    };
  });
