'use strict';

/**
 * @ngdoc overview
 * @name rdvmedecinsApp
 * @description
 * # rdvmedecinsApp
 *
 * Main module of the application.
 */
 // --------------------- modules
angular
  .module('rdvmedecinsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        // controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        // controllerAs: 'home'
      })
      .when('/angenda', {
        templateUrl: 'views/angenda.html',
        controller: 'AngendaCtrl',
        // controllerAs: 'angenda'
      })
      .when('/resa', {
        templateUrl: 'views/resa.html',
        controller: 'ResaCtrl',
        // controllerAs: 'resa'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
