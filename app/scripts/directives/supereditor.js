'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:superEditor
 * @description
 * # superEditor
 */
angular.module('statsdsuApp')
  .directive('superEditor', function ($compile, SECArray, SECService, RCodeExeService) {
    return {
      scope:{
        content: '=',
        editId: '&',
      },
      templateUrl:'views/templates/superEditor/super-editor.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.SECs = [];
        var cnt = angular.element('.content')
        scope.isOpen = false;
        scope.demo = {
          isOpen: false,
          count: 0,
          selectedDirection: 'left'
        };
        var compileContent = function(){
          $compile(cnt)(scope);
        }
        scope.addDirective = function(){
          cnt.append('<h1> add Directive </h1>');
          console.log(scope.content)
        }
        var SEAs  = SECArray;


        // Editor text
        // Pass Object
        scope.addDirectiveEditor = function(){
          var SEA = new SECService('editor-text','Hello world 2','<h1>hello world</h1>');
          var index = SECArray.addCnt(SEA);
          var editor = angular.element("<md-content><editor-text target="+index+"></editor-text></md-content>");
          editor = $compile(editor)(scope);
          cnt.append(editor);
        }

        scope.addDirectiveCode = function(){
          var SEA = new SECService('code-terminal','','');
          var index = SECArray.addCnt(SEA);
          var codeEditor = angular.element('<md-content><code-terminal></code-terminal></md-content>')
          codeEditor = $compile(codeEditor)(scope);
          cnt.append(codeEditor);
        }

        scope.addDirectiveChart = function(){
          var SEA = new SECService('graph','','');
          var index = SECArray.addCnt(SEA);
          var obj = {type:'editor-code', body:"<md-content><birds></birds></md-content>"}
          var codeEditor = angular.element(obj.body)
          codeEditor = $compile(codeEditor)(scope);
          cnt.append(codeEditor);
        }

        scope.addDirectiveSlideCourse = function(){
          var SEA = new SECService('slide-course','','');
          var index = SECArray.addCnt(SEA);
          var editor = angular.element("<md-content><slide-course></slide-course>></md-content>");
          editor = $compile(editor)(scope);
          cnt.append(editor);
        }

        scope.rCodeExe = function(){
          var SEA = new RCodeExeService('r-code-exe',{});
          var index = SECArray.addCnt(SEA);
          var courseCnt = angular.element(document.createElement('r-code-exe'));
          courseCnt.attr('target',index);
          var el = $compile( courseCnt )(scope);
          //wher e do you want to place the new element?
          cnt.append(courseCnt);
        }
      }
    };
  });