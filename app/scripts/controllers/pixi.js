'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:PixiCtrl
 * @description
 * # PixiCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('PixiCtrl', function ($scope, $document) {
    $scope.width = 600;
    $scope.height = 350;

    // You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
    // which will try to choose the best renderer for the environment you are in.

    var renderer = PIXI.autoDetectRenderer($scope.width, $scope.height, {backgroundColor: 0x1099bb, resolution: 1});
    document.getElementById('pixiContainer').appendChild(renderer.view);

    var stage = new PIXI.Container();
    var texture = PIXI.Texture.fromImage('dImages/PIXI/bunny.png');

    var bunny = new PIXI.Sprite(texture);

    //create the sprite's anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);
    animate();

    function animate(){
      requestAnimationFrame(animate);

      bunny.rotation += 0.1;
      renderer.render(stage);

    }
  });
