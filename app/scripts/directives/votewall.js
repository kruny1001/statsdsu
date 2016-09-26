'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:voteWall
 * @description
 * # voteWall
 */
angular.module('statsdsuApp')
  .directive('voteWall', function ($timeout, $firebaseObject, $firebaseArray) {
    return {
      templateUrl: 'views/templates/superEditor/vote-wall.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.eventType = "No events yet";
        var updateTime;
        var afterUpdateTime;
        scope.timeDiff = []

        scope.onHammer = function onHammer (event) {
          scope.eventType = event.type;
          ref.set({event: event.changedTouches[0], time:new Date().getTime()});
          console.log(event);
          TweenLite.set('#circle',{x: touchInfo.clientX-50, y:touchInfo.clientY-50})
        };

        scope.record = false;
        scope.items = ['Desktop', 'Mobile4G', 'Mobile3G', 'MobileWifi'];
        scope.selectedItem;
        scope.getSelectedText = function() {
          if (scope.selectedItem !== undefined) {
            return "Target " + scope.selectedItem;
          } else {
            return "Please select a destination";
          }
        };

        scope.targetDevice = 'desktop';
        var ref = firebase.database().ref().child('touch');
        var touchInfo = $firebaseObject(ref);
        //var touchHistory = $firebaseArray(historyRef);

        touchInfo.$loaded().then(function(){init()})


        function log(ev) {
          //console.log(ev);
          var updateTime = new Date().getTime();
          ref.set({clientX: ev.changedTouches[0].clientX, clientY: ev.changedTouches[0].clientY, time:updateTime});
        }

        var init = function(){
          touchInfo.$bindTo(scope, "touchInfoFirebase");
          TouchEmulator();

          //
          var unwatch = touchInfo.$watch(function() {
            var afterUpdateTime = new Date().getTime()
            console.log(new Date(afterUpdateTime).toUTCString(), new Date(scope.touchInfoFirebase.time).toUTCString())
            var evalTime = afterUpdateTime - scope.touchInfoFirebase.time;
            if(evalTime < 700)
              scope.timeDiff.push(afterUpdateTime - scope.touchInfoFirebase.time)
            console.log(afterUpdateTime - scope.touchInfoFirebase.time);
            TweenLite.set('#circle',{x: touchInfo.clientX-42, y:touchInfo.clientY-90})
          });

          var targetEle = document.getElementById('targetPanel');
          console.log(targetEle)

          //targetEle.addEventListener('touchstart', log, false);
          targetEle.addEventListener('touchmove', log, false);
          //targetEle.addEventListener('touchend', log, false);
        }

        //unwatch();

        scope.saveRecord = function(){
          var historyRef = firebase.database().ref().child('touchHistory/'+scope.selectedItem);
          var histories = $firebaseArray(historyRef);
          historyRef.set(scope.timeDiff);
        }


        scope.clock = "loading clock..."; // initialise the time variable
        scope.tickInterval = 1000 //ms

        var tick = function() {
          scope.clock = Date.now() // get the current time
          $timeout(tick, scope.tickInterval); // reset the timer
        }

        // Start the timer
        $timeout(tick, scope.tickInterval);


      }
    };
  });