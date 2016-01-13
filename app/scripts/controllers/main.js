'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the statsdsuApp
 */

angular.module('statsdsuApp')
  .controller('MainCtrl', function ($scope, $timeout, dataset, runSrc) {

    //animation
    TweenLite.set('.fr_tower', {rotationX:90})

    $timeout( function(){
      TweenLite.to('.fr_tower', .5, {rotationX:0})
    }, 3000);
    //TweenLite.to('.fr_tower', .5, {rotationX:0})

    $scope.$on('$viewContentLoaded', function(){
      $timeout(function(){
        componentHandler.upgradeAllRegistered();
      }, 300);
    });

    // The modes
    $scope.modes = ['Scheme', 'XML', 'Javascript', 'R'];
    $scope.mode = 'R';

    // The ui-ace option
    $scope.aceOption = {
      mode: $scope.mode.toLowerCase(),
      onLoad: function (_ace) {
        // HACK to have the ace instance in the scope...
        $scope.modeChanged = function () {
          _ace.getSession().setMode('ace/mode/' + $scope.mode.toLowerCase());
        };

      }
    };
    $scope.aceModel = ';; Scheme code in here.\n' +
      '(define (double x)\n\t(* x x))\n\n\n' +
      '<!-- XML code in here. -->\n' +
      '<root>\n\t<foo>\n\t</foo>\n\t<bar/>\n</root>\n\n\n' +
      '// Javascript code in here.\n' +
      'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';


    $scope.dataset1 = dataset.getDataset1();
    $scope.exe = function(code){
      ocpu.seturl("//kruny1001.ocpu.io/rRemoteSDSU/R");

        var req = ocpu.rpc("runSrc", {
          text: code
        }, function(output){
          $scope.dataset1Output = output;
          $scope.$digest();
          console.log(output);
        }).fail(function(text){
          alert("Error: " + req.responseText);
        });
    }

    $scope.exe2 = function(){
      ocpu.seturl("//kruny1001.ocpu.io/rRemoteSDSU/R");
      var inputJson = {"n":3, "mean": 10, "sd":10};
      var req = ocpu.call("getcurrent", {ticker: "APPL"
      }, function(output){
        console.log(output)
        var rpcResult = output.getStdout();
        rpcResult.success(function(result){
          $scope.rpcResult = result;
          $scope.$digest();
        });


        output.getObject(function(data){
         console.log(data)
        });

      });
    }

    $scope.mean2 = function(){
      //ocpu.seturl("//public.opencpu.org/ocpu/library/base/R");
      //var req = ocpu.rpc("rpcTest", {
      //  "x" : [1,2,5,3,6,-2,4]
      //}, function(session){
      //  console.log(session)
      //});

      ocpu.seturl("//kruny1001.ocpu.io/rRemoteSDSU/R");
      var code = "age <- c(1,3,5,2,11,9,3,9,12,3)\n weight <- c(4.4,5.3,7.2,5.2,8.5,7.3,6.0,10.4,10.2,6.1)\n mean(weight)\nsd(weight)\ncor(age,weight)\nplot(age,weight)\nplot(age,weight)";
      ocpu.call("runSrc", {
          text: code
        }, function(output){
          console.log(output);
          var d = output.getLoc();
          console.log(d)
          console.log(output.getObject());

          output.getConsole(function(outtxt){
            console.log("Console: "+ outtxt);
          })
          output.getObject(function(data){
            console.log("Object: "+ data);
          })
        }).fail(function(text){
      });
    }

    $scope.exePlot = function() {
      ocpu.seturl("//kruny1001.ocpu.io/rRemoteSDSU/R");
      var ticker = $("#ticker").val();
      var req = $("#plotdiv").rplot("smoothplot", {
        ticker : ticker,
        from : "2013-01-01"
      })

//optional: add custom callbacks
      req.fail(function(){
        alert("R returned an error: " + req.responseText);
      });
    }

    $scope.codedata = "age <- c(1,3,5,2,11,9,3,9,12,3)\nmean(age)";

    $scope.runCodeR = function(code){
      ocpu.seturl("//kruny1001.ocpu.io/rRemoteSDSU/R");

      ocpu.call("runSrc", {
        text: code
      }, function(output){
        console.log(output);
        var d = output.getLoc();
        console.log(d)
        $scope.codedataResult = output.responseText;

        output.getConsole(function(outtxt){
          $scope.codedataResult = outtxt;
          $scope.$digest();
          console.log("Console: "+ outtxt);
        })
        output.getObject(function(data){
          console.log("Object: "+ data);
        })
      }).fail(function(text){
      });

    }

    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']],
        processEscapes: true
      }
    });
    $scope.expression = "this is my expression \\( \\frac{5}{4} \\div \\frac{1}{6} \\)";
    $scope.mean = "\\( \\frac{total income}{size of population} \\div \\frac{1}{6} \\)"


    $scope.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value/1000; },
        showValues: true,
        valueFormat: function(d){
          return d3.format('$,.1f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'Year'
        },
        yAxis: {
          axisLabel: 'Capita Income(USD $1000)',
          axisLabelDistance: 30
        }
      }
    };
    $scope.data2 = [{
      key: "Cumulative Return",
      values: [
        { "label" : "2007" , "value" : 46437},
        { "label" : "2008" , "value" : 48061 },
        { "label" : "2009" , "value" : 48401},
        { "label" : "2010" , "value" : 47001 },
        { "label" : "2011" , "value" : 48374},
        { "label" : "2012" , "value" : 49781 },
        { "label" : "2013" , "value" : 52980 },
        { "label" : "2014" , "value" : 54629 }
      ]
    }]

    $scope.data3 = [{
      key: "Cumulative Return",
      values: [
        { "label" : "1999" , "value" : 32949},
        { "label" : "2000" , "value" : 34620 },
        { "label" : "2001" , "value" : 36449},
        { "label" : "2002" , "value" : 37273 },
        { "label" : "2003" , "value" : 38166},
        { "label" : "2004" , "value" : 39677 },
        { "label" : "2005" , "value" : 41921 },
        { "label" : "2006" , "value" : 44307 }
      ]
    }]




    $scope.data = [
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 6],
      ['Zucchini', 1],
      ['Pepperoni', 2],
      ['Some', 2]
    ];

    $scope.change1 = function(){
      $scope.data = [
        ['Mushrooms', 2],
        ['Onions', 9],
        ['Olives', 7],
        ['Zucchini', 3],
        ['Pepperoni', 0],
        ['Some', 1]
      ];
    };

    $scope.change2 = function(){
      $scope.data = [
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 6],
        ['Zucchini', 3],
        ['Pepperoni', 4],
        ['Some', 9]
      ];
    };

    $scope.change3 = function(){
      $scope.data = [
        ['Mushrooms', 3],
        ['Onions', 6],
        ['Olives', 5],
        ['Zucchini', 11],
        ['Pepperoni', 20],
        ['Some', 4]
      ];
    };

    console.clear()
  });

angular.module('statsdsuApp').directive("mathjaxBind", function() {
  return {
    restrict: "A",
    controller: ["$scope", "$element", "$attrs",
      function($scope, $element, $attrs) {
        $scope.$watch($attrs.mathjaxBind, function(texExpression) {
          $element.html(texExpression);
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, $element[0]]);
        });
      }]
  };
});
angular.module('statsdsuApp').directive('qnPiechart', [
  function() {
    return {
      require: '?ngModel',
      link: function(scope, element, attr, controller) {
        var settings = {
          is3D: true
        };

        var getOptions = function() {
          return angular.extend({ }, settings, scope.$eval(attr.qnPiechart));
        };

        // creates instance of datatable and adds columns from settings
        var getDataTable = function() {
          var columns = scope.$eval(attr.qnColumns);
          var data = new google.visualization.DataTable();
          angular.forEach(columns, function(column) {
            data.addColumn(column.type, column.name);
          });
          return data;
        };

        var init = function() {
          var options = getOptions();
          if (controller) {

            var drawChart = function() {
              var data = getDataTable();
              // set model
              data.addRows(controller.$viewValue);

              // Instantiate and draw our chart, passing in some options.
              var pie = new google.visualization.PieChart(element[0]);
              pie.draw(data, options);
            };

            controller.$render = function() {
              drawChart();
            };
          }

          if (controller) {
            // Force a render to override
            controller.$render();
          }
        };

        // Watch for changes to the directives options
        scope.$watch(getOptions, init, true);
        scope.$watch(getDataTable, init, true);
      }
    };
  }
]);