'use strict';

var app = angular
.module('Selfiewar', [
  'ngAnimate',    
  'ngResource',
  'ngRoute',    
  'firebase',
  'toaster'
  ])

  .constant('FURL', 'https://selfiewar.firebaseio.com/')

  .config(function ($routeProvider) {
    $routeProvider      
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl'
    })
    .when('/entry', {
      templateUrl: 'views/entry.html',
      controller: 'AuthCtrl'
    })
    .when('/snap', {
      templateUrl: 'views/snap.html',
      controller: 'AuthCtrl'
    })
    .when('/vote', {
      templateUrl: 'views/vote.html',
      controller: 'AuthCtrl'
    })
    .when('/votezoom', {
      templateUrl: 'views/votezoom.html',
      controller: 'AuthCtrl'  
    })
    .when('/leader', {
      templateUrl: 'views/leader.html',
      controller: 'AuthCtrl'  
    })
    .otherwise({
      redirectTo: '/'
    });
  });