'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:codeacJumbo
 * @description
 * # codeacJumbo
 */
angular.module('statsdsuApp')
  .directive('codeacJumbo', function ($timeout, $compile) {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var textDesc = "";
        var textElement = angular.element('<div class="md-display-1">개발자의 지침서</div>')
        var textDesc = angular.element('<p class="md-title">쉽고 간편하고 완벽한 강의를 제공해 드립니다.</p>')
        var playBtn = angular.element('<button ng-click="play()">다시보기</button>')
        element.append(textElement);
        element.css('padding', "20px")
        var tl = new TimelineLite,
            mySplitText = new SplitText(textElement),
            chars = mySplitText.chars;
        TweenLite.set(textElement, {perspective:400});
        scope.play = function(){
          tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
          console.log('dd')
        }
        $timeout(function () {
          tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
          playBtn = $compile(playBtn)(scope);
          element.append(textDesc);
          element.append(playBtn);
        },50);

      }
    };
  });