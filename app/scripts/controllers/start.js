'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('StartCtrl', function ($scope, $timeout) {


    $scope.$on('$viewContentLoaded', function() {
      $timeout(function () {
        componentHandler.upgradeAllRegistered();
      }, 300);
    });

    var TextureCache = PIXI.utils.TextureCache,
      Sprite = PIXI.Sprite,
      Rectangle = PIXI.Rectangle;

    //Create the renderer
    var renderer = new PIXI.WebGLRenderer(256, 256);
    //renderer.view.style.border = "1px dashed black";
    renderer.backgroundColor = 0xffffff;
    renderer.view.style.position = "absolute"
    renderer.view.style.display = "block";
    renderer.autoResize = true;
    renderer.resize(window.innerWidth-1, window.innerHeight-1);

    //Add the canvas to the HTML document
    //document.getElementById('main').appendChild(renderer.view)
    document.body.appendChild(renderer.view);

    //Create a container object called the `stage`
    var stage = new PIXI.Container();
    var texture = PIXI.utils.TextureCache["images/anySpriteImage.png"];
    var sprite = new PIXI.Sprite(texture);

    PIXI.loader
      .add(["dImages/yeoman.png", "dImages/tileset.png"])
      .on("progress", loadProgressHandler)
      .load(setup);

    function loadProgressHandler(loader, resource) {

      //Display the file `url` currently being loaded
      console.log("loading: " + resource.url);

      //Display the precentage of files currently loaded
      console.log("progress: " + loader.progress + "%");

      //If you gave your files names as the first argument
      //of the `add` method, you can access them like this
      //console.log("loading: " + resource.name);
    }
//Tell the `renderer` to `render` the `stage`
    function setup() {

      //Create the `cat` sprite from the texture
      var cat = new PIXI.Sprite.fromImage("dImages/yeoman.png");

      cat.x = 196;
      cat.y = 196;
      cat.scale.set(0.5, 0.5);
      cat.rotation = 0.5;

      //Add the cat to the stage
      stage.addChild(cat);

      //Create the `tileset` sprite from the texture
      var texture = TextureCache["dImages/tileset.png"];

      //Create a rectangle object that defines the position and
      //size of the sub-image you want to extract from the texture
      var rectangle = new Rectangle(192, 128, 64, 64);
      //Tell the texture to use that rectangular section
      texture.frame = rectangle;
      //Create the sprite from the texture
      var rocket = new Sprite(texture);
      //Position the rocket sprite on the canvas
      rocket.x = 132;
      rocket.y = 132;
      //Optionally use `pivot` to move the sprite's x and y position
      /*
       rocket.pivot.set(32, 32);
       rocket.rotation = 0.3;
       console.log(rocket.position)
       */
      //Add the rocket to the stage
      stage.addChild(rocket);

      //Render the stage
      renderer.render(stage);
    }
  });
