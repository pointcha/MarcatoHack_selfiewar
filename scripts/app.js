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
    controller: 'AuthController'
  })
  .when('/entry', {
    templateUrl: 'views/entry.html',
    controller: 'AuthController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'AuthController'
  })
  .when('/snap', {
    templateUrl: 'views/snap.html',
    controller: 'AuthController'
  })
  .when('/vote', {
    templateUrl: 'views/vote.html',
    controller: 'AuthController'
  })
  .when('/votezoom', {
    templateUrl: 'views/votezoom.html',
    controller: 'AuthController'  
  })
  .when('/leader', {
    templateUrl: 'views/leader.html',
    controller: 'AuthController'  
  })
  .otherwise({
    redirectTo: '/'
  });
});