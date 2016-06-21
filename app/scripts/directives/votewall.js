'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:voteWall
 * @description
 * # voteWall
 */
angular.module('statsdsuApp')
  .directive('voteWall', function ($firebaseObject) {
    return {
      templateUrl: 'views/templates/superEditor/vote-wall.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        scope.eventType = "No events yet";
        scope.onHammer = function onHammer (event) {
          scope.eventType = event.type;
          ref.set(event.changedTouches[0]);
          TweenLite.set('#circle',{x: touchInfo.clientX-50, y:touchInfo.clientY-50})
        };

        var ref = firebase.database().ref().child('touch');
        var touchInfo = $firebaseObject(ref);

        touchInfo.$bindTo(scope, "touchInfoFirebase");
        TouchEmulator();
        function log(ev) {
          console.log(ev);
          ref.set(ev.changedTouches[0]);
        }

        var unwatch = touchInfo.$watch(function() {
          console.log('Changed');
          TweenLite.set('#circle',{x: touchInfo.clientX-50, y:touchInfo.clientY-50})
        });

        // at some time in the future, we can unregister using
        //unwatch();

        document.body.addEventListener('touchstart', log, false);
        document.body.addEventListener('touchmove', log, false);
        document.body.addEventListener('touchend', log, false);
      }
    };
  });