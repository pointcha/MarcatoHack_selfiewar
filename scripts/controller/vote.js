'use strict';

angular.module('votingApp')
  .controller('AuthController', function ($scope, Candidate) {
		$scope.candidates = [
			new Candidate('Evil Cat'),
			new Candidate('Mad Elephant'),
			new Candidate('Cute Puppy')
		];
  });