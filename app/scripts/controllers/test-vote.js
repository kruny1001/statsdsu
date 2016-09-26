'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:TestVoteCtrl
 * @description
 * # TestVoteCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('TestVoteCtrl', function ($scope) {


    /*
    // to make working with angles easy
    window.TO_RAD = Math.PI / 180;
    window.TO_DEG = 1 / TO_RAD;

    Leap.loop(function(frame) {

      frame.hands.forEach(function(hand, index) {

        var cat = ( cats[index] || (cats[index] = new Cat()) );
        cat.setTransform(hand.screenPosition(), hand.roll());

      });

    }).use('screenPosition', {scale: 0.25});

    Leap.loop({
      // frame callback is run before individual frame components
      frame: function(frame){
        out.innerHTML = ''
        out.innerHTML = 'Frame: ' + frame.id;
      },

      // hand callbacks are run once for each hand in the frame
      hand: function(hand){
        out.innerHTML += "Hand: " + hand.id + ' &nbsp;roll: ' + Math.round(hand.roll() * TO_DEG) + '°<br/>'
        //TweenMax.set('#target', {rotation: Math.round(hand.roll() * TO_DEG)})
      }

    });

    var cats = {};

    var Cat = function() {
      var cat = this;
      var img = document.getElementById('circle');
      //img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png';
      //img.style.position = 'absolute';
      //img.onload = function () {
      //  cat.setTransform([window.innerWidth/2,window.innerHeight/2], 0);
      //  document.body.appendChild(img);
      //}

      cat.setTransform = function(position, rotation) {
        TweenMax.set('#circle', {x:position[0], y:position[1], rotation: rotation})
        //img.style.left = position[0] - img.width  / 2 + 'px';
        //img.style.top  = position[1] - img.height / 2 + 'px';
        //img.style.transform = 'rotate(' + -rotation + 'rad)';
        //img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
        //  img.style.OTransform = img.style.transform;

      };

    };

    cats[0] = new Cat();
    Leap.loopController.setBackground(true)
  */
  });
