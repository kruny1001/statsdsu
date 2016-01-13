'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('statsdsuApp')
  .controller('AccountCtrl', function ($scope, FBURL, $firebaseAuth, user, Auth, Ref, $firebaseObject, $timeout, $firebaseArray) {

    var ref = new Firebase(FBURL);
    $scope.authObj = $firebaseAuth(ref);

    //var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6InVuaXF1ZUlkMSIsInNvbWUiOiJhcmJpdHJhcnkiLCJkYXRhIjoiaGVyZSJ9LCJpYXQiOjE0NDU2MjAxMjl9.iHlRzY3ncWsEsu_5ZiCohFfpY8-1XuFcm89WGnorGk8';
    //$scope.authObj.$authWithCustomToken(token).then(function(authData) {
    //  console.log("Logged in as:", authData.uid);
    //  console.log(authData);
    //}).catch(function(error) {
    //  console.error("Authentication failed:", error);
    //});


    $scope.user = user;
    $scope.logout = function() { Auth.$unauth(); };
    $scope.messages = [];
    var profile = $firebaseObject(Ref.child('users/'+user.uid));
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
        Auth.$changePassword({email: profile.email, oldPassword: oldPass, newPassword: newPass})
          .then(function() {
            success('Password changed');
          }, error);
      }
    };

    $scope.changeEmail = function(pass, newEmail) {
      $scope.err = null;
      Auth.$changeEmail({password: pass, newEmail: newEmail, oldEmail: profile.email})
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

    function alert(msg, type) {
      var obj = {text: msg+'', type: type};
      $scope.messages.unshift(obj);
      $timeout(function() {
        $scope.messages.splice($scope.messages.indexOf(obj), 1);
      }, 10000);
    }


    /////////////////////
    google.charts.setOnLoadCallback(drawChart);
    var material;
    var data;
    function drawChart() {

      data = google.visualization.arrayToDataTable([
        ['City', 'Class Completion', 'Course Score'],
        ['Intro Problem', 12, 15],
        ['Visual Problem', 23, 16],
        ['test2', 31, 16],
      ]);

      var options = {
        chartArea: {

        },
        backgroundColor: {stroke:'black', fill:'#DDE3E7',
          strokeSize: 1},
        chart: {


        },
        hAxis: {
          title: 'Complete Rate',
          minValue: 0,
          maxVlaue:100
        },
        vAxis: {
          title: 'Course'
        },

        bars: 'horizontal'
      };
      material = new google.charts.Bar(document.getElementById('chart_div'));
      google.visualization.events.addListener(material, 'select', selectHandler);

      material.draw(data, options);
    }


    function selectHandler(e) {
      var selectedItem = material.getSelection()[0];
      if (selectedItem) {
        var value = data.getValue(selectedItem.row, selectedItem.column);
        console.log('The user selected: ' + data.getValue(selectedItem.row, 0) +'=' + value);
        $scope.targetLabel = data.getValue(selectedItem.row, 0);
        $scope.targetValue = value;
        $scope.$digest();
      }
    }

    var FB = new Firebase(FBURL);
    var actScore = FB.child('actScore').child(user.uid);
    $scope.activityScore = $firebaseObject(actScore);

    $scope.classes = []
    var cntList = FB.child('contentList');
    $scope.cntList = $firebaseArray(cntList);
    $scope.cntList.$loaded().then(function(data){
      data.forEach(function(val){
        var classRef = FB.child(val.title);
        $scope.classes.push($firebaseObject(classRef));

      })
    })



  });
