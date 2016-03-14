'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.ResearchFormService
 * @description
 * # ResearchFormService
 * Factory in the statsdsuApp.
 */
angular.module('statsdsuApp')
  .factory('ResearchFormService', function ($q, FBURL, $firebaseObject, $firebaseArray) {
    var ref = new Firebase(FBURL)
    var researchRef = ref.child('researches');

    // Public API here
    return {
      addNewResearch: function(newObj){
        var deferred = $q.defer();

        //Check User Already Done this research

        var newResearch = researchRef.push()
        newResearch.set(newObj, function(error) {
            if (error) {
              deferred.reject(error);
            } else {
              deferred.resolve('Thank you!')
            }
        })
      },
      listResearches: function(){
        return $firebaseArray(researchRef);
      },
      setStatus: function(){
        //Get User Id
        //Set True
      }
    };
  });
