'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:TestProgressCtrl
 * @description
 * # TestProgressCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('TestProgressCtrl', function ($scope) {

    $scope.code = "abc\nabc"
    $scope.aceOption = {
      require: ['ace/ext/language_tools'],
      useWrapMode: true,
      showGutter: true,
      theme: 'twilight',
      maxLines: Infinity,
      mode: 'r',
      onLoad: function (_ace) {
        console.log(_ace);
        _ace.$blockScrolling =Infinity;
        if(_ace.getSession().getScreenLength() == 0){
          var newHeight =
            1 * _ace.renderer.lineHeight + _ace.renderer.scrollBar.getWidth();
          $('.course-ui-ace ').height(newHeight.toString() + "px");
          _ace.resize();
        }else{
          var newHeight =
            _ace.getSession().getScreenLength()
            * _ace.renderer.lineHeight
            + _ace.renderer.scrollBar.getWidth();
          $('.course-ui-ace ').height(newHeight.toString() + "px");
          _ace.resize();
        }
      },
      onChange: function(_ace) {
        var newHeight =
          _ace[1].getSession().getScreenLength()
          * _ace[1].renderer.lineHeight
          + _ace[1].renderer.scrollBar.getWidth();
        $('.course-ui-ace ').height(newHeight.toString() + "px");
        _ace[1].resize();
      }
    }


    //google.charts.load('41', {packages: ['corechart', 'bar']});
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

  });
