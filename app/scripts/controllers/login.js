'use strict';
/**
 * @ngdoc function
 * @name statsdsuApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('statsdsuApp')
  .controller('LoginCtrl', function ($scope, AuthApp, $location, $q, $timeout) {

    $scope.facobookProvider = new firebase.auth.FacebookAuthProvider();
    $scope.facobookProvider.addScope('email');
    $scope.facobookProvider.addScope('user_friends');
    $scope.facobookProvider.setCustomParameters({
      'display': 'popup'
    });

    $scope.oauthLogin = function() {
      $scope.err = null;
      AuthApp.$signInWithPopup('facebook')
        .then(redirect, showError);
    };

    $scope.anonymousLogin = function() {
      $scope.err = null;
      AuthApp.$authAnonymously({rememberMe: true}).then(redirect, showError);
    };

    $scope.passwordLogin = function(email, pass) {
      $scope.err = null;
      AuthApp.$authWithPassword({email: email, password: pass}, {rememberMe: true}).then(
        redirect, showError
      );
    };

    $scope.createAccount = function(email, pass, confirm) {
      $scope.err = null;
      if( !pass ) {
        $scope.err = 'Please enter a password';
      }
      else if( pass !== confirm ) {
        $scope.err = 'Passwords do not match';
      }
      else {
        AuthApp.$createUser({email: email, password: pass})
          .then(function () {
            // authenticate so we have permission to write to Firebase
            return AuthApp.$authWithPassword({email: email, password: pass}, {rememberMe: true});
          })
          .then(createProfile)
          .then(redirect, showError);
      }

      function createProfile(user) {
        var ref = firebase.database().ref().child('users/' + user.uid), def = $q.defer();
        ref.set({email: email, name: firstPartOfEmail(email)}, function(err) {
          $timeout(function() {
            if( err ) {
              def.reject(err);
            }
            else {
              def.resolve(ref);
            }
          });
        });
        return def.promise;
      }
    };
    function firstPartOfEmail(email) {
      return ucfirst(email.substr(0, email.indexOf('@'))||'');
    }
    function ucfirst (str) {
      // inspired by: http://kevin.vanzonneveld.net
      str += '';
      var f = str.charAt(0).toUpperCase();
      return f + str.substr(1);
    }
    function redirect() {
      $location.path('/account');
    }
    function showError(err) {
      $scope.err = err;
    }
  });
