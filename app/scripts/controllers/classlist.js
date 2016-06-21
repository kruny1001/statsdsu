'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:ClasslistCtrl
 * @description
 * # ClasslistCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('ClasslistCtrl', function ($scope, $location,$interval,
                                         Class, Course
  ) {

    $scope.classes = Class.list();
    $scope.courses = Course.list();

    TweenMax.from('.logo', 1, {opacity:0.5, rotation:45});
    $scope.goto = function(path){
      $location.path( path );
    }

    var svg = d3.select(".pie-chart")
      .append("svg")
      .append("g")

    svg.append("g")
      .attr("class", "slices");
    svg.append("g")
      .attr("class", "labels");
    svg.append("g")
      .attr("class", "lines");

    var width = 960,
      height = 450,
      radius = Math.min(width, height) / 2;

    var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {
        return d.value;
      });

    var arc = d3.svg.arc()
      .outerRadius(radius * 0.8)
      .innerRadius(radius * 0.4);

    var outerArc = d3.svg.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var key = function(d){ return d.data.label; };

    var color = d3.scale.ordinal()
      .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    function randomData (){
      var labels = color.domain();
      return labels.map(function(label){
        return { label: label, value: Math.random() }
      });
    }
  });
