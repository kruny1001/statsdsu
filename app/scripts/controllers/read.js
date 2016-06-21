'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:ReadCtrl
 * @description
 * # ReadCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('ReadCtrl',
  function($scope, $sce, blogService, FBURL, user, Auth, $routeParams, $location, $firebaseObject, $firebaseArray){

    $scope.authData = Auth.$getAuth();

    $scope.editable = false;
    var id = $routeParams.id;
    var postRef = firebase.database().ref().child('/write/'+ id);

    if(postRef){
      // Increment Number of Views
      var upViewsRef = postRef.child('views');
      upViewsRef.transaction(function (current_value) {
        return (current_value || 0) + 1;
      });
    }

    $scope.likeBtn = function(){
      var likeUserRef = postRef.child('PrefUserList').child($scope.authData.uid);
      likeUserRef.transaction(function(crtData){
        if(crtData === null){
          var upViewsRef = postRef.child('likes');
          upViewsRef.transaction(function (current_value) {
            return (current_value || 0) + 1;
          });
          return {uid:$scope.authData.uid, like:true}
        } else{
          console.log('You Already Voted');
          return;
        }
      }, function(err, committed, snapshot){
        if(err){
          console.log('Transaction failed abnormally!', err);
        }else if(!committed){
          console.log('We aborted the transaction (because wilma already exists).');
        }
        else{
          console.log('You voted');
        }
        console.log("user's data: ", snapshot.val());
      });
    }
    $scope.disLikeBtn = function(){
      var likeUserRef = postRef.child('PrefUserList').child($scope.authData.uid);
      likeUserRef.transaction(function(crtData){
        if(crtData === null){
          var upViewsRef = postRef.child('dislikes');
          upViewsRef.transaction(function (current_value) {
            return (current_value || 0) + 1;
          });
          return {uid:$scope.authData.uid, like:false}
        } else{
          console.log('You Already Voted');
          return;
        }
      }, function(err, committed, snapshot){
        if(err){
          console.log('Transaction failed abnormally!', err);
        }else if(!committed){
          console.log('We aborted the transaction (because wilma already exists).');
        }
        else{
          console.log('You voted');
        }
        console.log("user's data: ", snapshot.val());
      });
    }
    $scope.post = $firebaseObject(postRef);
    $scope.post.$loaded().then(function(val){

      if(val.auth == user.uid)
        $scope.editable = true;
      $scope.post.cnt = $sce.trustAsHtml(val.cnt);
    })

    $scope.editPage = function(){
      $location.path('edit/'+$scope.post.$id);
    }

    var cmtRef = firebase.database().ref().child('comments/'+$routeParams.id);
    var cmts = $firebaseArray(cmtRef);
    cmts.$loaded().then(function(data){
      console.log(data)
      $scope.cmts = data;
    })

    $scope.deleteCnt = function(){
      blogService.deleteItem($routeParams.id);
    }

  })