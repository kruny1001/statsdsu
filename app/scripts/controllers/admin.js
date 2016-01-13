'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:UsertestCtrl
 * @description
 * # UsertestCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('AdminCtrl', function ($scope, FBURL, $firebaseObject,$firebaseArray, UserFireList, courseFactory) {
    $scope.courseSelected=false;

    //test UserFire factory
    var ref = new Firebase(FBURL);
    var usersUsers = ref.child('users');
    var elements = document.querySelectorAll('.editable'),
      editor = new MediumEditor(elements, {
        toolbar: {
          buttons: [
            'bold',
            'italic',
            {
              name: 'h1',
              action: 'append-h2',
              aria: 'header type 1',
              tagNames: ['h2'],
              contentDefault: '<b>H1</b>',
              classList: ['custom-class-h1'],
              attrs: {
                'data-custom-attr': 'attr-value-h1'
              }
            },
            {
              name: 'h2',
              action: 'append-h3',
              aria: 'header type 2',
              tagNames: ['h3'],
              contentDefault: '<b>H2</b>',
              classList: ['custom-class-h2'],
              attrs: {
                'data-custom-attr': 'attr-value-h2'
              }
            },
            'justifyCenter',
            'quote',
            'anchor'
          ]
        }
      });

    $scope.test = UserFireList(usersUsers);
    $scope.test.$loaded(function(snap){
    });

    $scope.evaluate = function(target){
      $scope.courseSelected=true;
      $scope.course = courseFactory.listCoures(target);
    }

    $scope.reset = function(){
      $scope.newContentSelectTopic = false;
      $scope.courseSelected=false;
      $scope.contentsList = $firebaseArray(ref.child('contentList'));
    }

    $scope.submitNewContent = function(title){
      var contentList = $firebaseArray(ref.child('contentList'));
      contentList.$add({title:title}).then(function(){
        var usersRef = ref.child(title);
        usersRef.set({
          title:title
        })
      });
    };

    $scope.loadContents = function(){
      $scope.contents = $firebaseArray(ref.child('contentList'));
    }

    $scope.deleteContent = function(index){
      var list  = $firebaseArray(ref.child('contentList'));
      list.$loaded().then(function(){
        var item = list[index];
        var refName = list[index].title;
        list.$remove(item);
        ref.child('contentList');
        var targetRef = new Firebase(FBURL+'/refName')
        targetRef.remove();
      })

    }

    //$scope.contentList = function(){
    //  var test = $firebaseArray(ref.child('contentList'));
    //  test.$add({title:'introProblem'})
    //  test.$add({title:'visProblem'})
    //  test.$add({title:'R'});
    //}
  });
