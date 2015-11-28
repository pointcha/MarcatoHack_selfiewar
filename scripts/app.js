'use strict';

var app = angular
.module('SelfieWar', [
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
      templateUrl: 'views/entry.html'  
    })
    .when('/snap', {
      templateUrl: 'views/snap.html' 
    })
    .when('/vote', {
      templateUrl: 'views/vote.html'
    })
    .when('/votezoom', {
      templateUrl: 'views/votezoom.html'  
    })
    .when('/leader', {
      templateUrl: 'views/leader.html'  
    })
    .otherwise({
      redirectTo: '/'
    });
  });