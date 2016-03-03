'use strict';

/**
 * @ngdoc overview
 * @name statsdsuApp
 * @description
 * # statsdsuApp
 *
 * Main module of the application.
 */

//MathJax.Hub.Config({skipStartupTypeset: true});
//MathJax.Hub.Configured();

angular.module('statsdsuApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    //'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'ngMaterial',
    'nvd3',
  'ui.ace'
  ]);
