'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:rCodeExe
 * @description
 * # rCodeExe
 */
angular.module('statsdsuApp')
  .directive('rCodeExe', function (rpcFactory, activityScore, SECArray, SECService) {
    return {
      templateUrl: 'views/templates/superEditor/r-code-exe.html',
      scope: {target: '@'},
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.tool = true;
        scope.targetObj = {
          topic: 'Line Charts',
          desc: 'First we will produce a very simple graph using the values in the car vector',
          crntContent: '123',
          code: '# Define the cars vector with 5 values\n'
          + 'cars <- c(1, 3, 6, 4, 9)\n'
          + '# Graph the cars vector with all defaults\n'
          + 'plot(cars)\n'
        };
        scope.SEC = SECArray.getElement(scope.target);
        //if(scope.SEC.title === undefined)
        //  scope.SEC.title = 'Type new title';
        //if(scope.SEC.desc === undefined)
        //  scope.SEC.desc = 'Type Description here';

        if (scope.target !== undefined) {
          //Get Index
          scope.crntContent = '123'
          //materials= scope.target.material
          //challenge = scope.target.challenge
          //initialMatLength = materials.length;
          //initialChalLength = challenge.length;
          //scope.history=[];
          //scope.crntContent = _.first(materials);
          //console.log(scope.target.$id)
          //scope.history.push(_.first(materials))
          //_.pullAt(materials, 0);
        }

        scope.deleteElement = function(){
          SECArray.removeElement(scope.target)
          element.empty();
          scope.$destroy();
        }

        scope.popCnt = function () {
          console.log(scope.target.$id)
          if (materials.length != 0) {
            scope.history.push({cnt: _.first(materials), type: 'material'})
            console.log('ddd ' + materials);
            _.pullAt(materials, 0);
          } else if (materials.length == 0 && challenge != 0) {
            scope.history.push({cnt: _.first(challenge), type: 'challenge'})
            _.pullAt(challenge, 0);
          } else {
            alert("Done!");
            activityScore.completeCnt(scope.target.$id, scope.target.topic)
            //Update Activity
          }
          scope.$digest();
        }

        //Regular Case of code
        // Run the Code Btn Click
        scope.runOpenCpu = function (ele) {
          //alert(ele.code);
          ocpu.seturl("//kruny1001.ocpu.io/rRemoteSDSU/R");
          var req = ocpu.rpc("runSrc", {
            text: ele.code
          }, function (output) {
            //scope.target.$id
            //console.log(output.message);
            console.log(output);
            ele.result = output.value;
            scope.$digest();
          });
          //if R returns an error, alert the error message
          req.fail(function () {
            ele.result = req.responseText;
            scope.$digest();
            $(function () {
              $(".result-code").typed({
                strings: [ele.result.toString()],
                typeSpeed: 2,
                showCursor: false,
              });
            });
          });
        }

        //Regular Case of code
        scope.exePlot = function (ele) {
          ocpu.seturl("//kruny1001.ocpu.io/rRemoteSDSU/R");
          var ticker = $("#ticker").val();
          var req = $("#plotdiv").rplot("runSrc", {
            text: ele.code
          })
          //optional: add custom callbacks
          console.log(req);
          req.fail(function () {
            alert("R returned an error: " + req.responseText);
          });
        }
        scope.checkRecord = function () {
          console.log(scope.target);
          console.log(materials);
          console.log(challenge);
        }
      }

    };
  })
  .directive("contenteditable", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attrs, ngModel) {

        function read() {
          ngModel.$setViewValue(element.html());
        }

        ngModel.$render = function() {
          element.html(ngModel.$viewValue || "");
        };

        element.bind("blur keyup change", function() {
          scope.$apply(read);
        });
      }
    };
  });;