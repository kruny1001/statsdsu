'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:mainCnt
 * @description shows main contents 
 * # mainCnt
 */
angular.module('statsdsuApp')
  .directive('mainCnt', function () {
    return {
      templateUrl: 'views/content-tool/mainCnt.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // read main content (Featured)
        // R tutorial 
        // course-detail/-KIMnC0W_09BA9RQrjmq
        // Docker Basic
        // course-detail/-KzBARSdi3gix3OaSqLG
        scope.featuredContents = [
          {link: "course-detail/-KIMnC0W_09BA9RQrjmq", title: "R tutorial", desc: "Learn basic R script"},
          {link: "course-detail/-KzBARSdi3gix3OaSqLG", title: "Docker Basic", desc: "Learn basic docker"},
          {link: "course-detail/-L1EkxXcld6br4hG_reZ", title: "iDEP Introduction", desc: "Introduce iDEP"},
          {link: "course-detail/-L1EmCSHjHirATjU1aQ3", title: "iDEP Implementation", desc:"iDEP Implementation Instruction"}
        ]
      }
    };
});