'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('MenuCtrl', function ($scope, $location) {
    TweenMax.from('.logo', 1, {opacity:0.5, rotation:45});
    $scope.goto = function(path){
      $location.path( path );
    }
//
//    TweenLite.defaultEase = Power3.easeInOut;
//
////responsive timeline animation.
////values recorded once, nothing changes on resize
//    var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
//    tl.from(".red", 1, {xPercent:-100, force3D:true})
//      .to(".red", 1, {xPercent:100}, "+=3");
//    tl.play(5); //start at 5-seconds in just because it looks better initially (totally subjective).
//
//    var $device = $(".device");
////jQueryUI Slider to simulate change in screen size
////    $("#slider").slider({
////      range: false,
////      min: 50,
////      max: 95,
////      step: 0.02,
////      value:70,
////      slide: function ( event, ui ) {
////        $device.css("width", ui.value + "%");
////      }
////    });

  });