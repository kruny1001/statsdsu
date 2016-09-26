'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('statsdsuApp')
  .controller('AccountCtrl', function ($scope, $rootScope, FBURL, $firebaseAuth, user, AuthApp, $firebaseObject, $timeout, $firebaseArray) {

    var ref = firebase.database().ref();
    $scope.crntPage = $firebaseObject(ref.child('crntUrl'));
    $scope.crntPage.$loaded().then(function(snap){
      snap.path = 'account'
      snap.$save();
    })


    $scope.authObj = $firebaseAuth();

    //var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6InVuaXF1ZUlkMSIsInNvbWUiOiJhcmJpdHJhcnkiLCJkYXRhIjoiaGVyZSJ9LCJpYXQiOjE0NDU2MjAxMjl9.iHlRzY3ncWsEsu_5ZiCohFfpY8-1XuFcm89WGnorGk8';
    //$scope.authObj.$authWithCustomToken(token).then(function(authData) {
    //  console.log("Logged in as:", authData.uid);
    //  console.log(authData);
    //}).catch(function(error) {
    //  console.error("Authentication failed:", error);
    //});


    $scope.user = user;
    $scope.logout = function() { $scope.authObj.$signOut(); };
    $scope.messages = [];
    var ref = firebase.database().ref();
    var profile = $firebaseObject(ref.child('users/'+user.uid));
    console.log(profile);
    profile.$bindTo($scope, 'profile');


    $scope.changePassword = function(oldPass, newPass, confirm) {
      $scope.err = null;
      if( !oldPass || !newPass ) {
        error('Please enter all fields');
      }
      else if( newPass !== confirm ) {
        error('Passwords do not match');
      }
      else {
        $scope.authObj.$updatePassword({email: profile.email, oldPassword: oldPass, newPassword: newPass})
          .then(function() {
            success('Password changed');
          }, error);
      }
    };

    $scope.changeEmail = function(pass, newEmail) {
      $scope.err = null;
      $scope.authObj.$updateEmail({password: pass, newEmail: newEmail, oldEmail: profile.email})
        .then(function() {
          profile.email = newEmail;
          profile.$save();
          success('Email changed');
        })
        .catch(error);
    };

    function error(err) {
      alert(err, 'danger');
    }

    function success(msg) {
      alert(msg, 'success');
    }
  });
