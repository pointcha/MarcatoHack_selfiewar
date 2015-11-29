'use strict';

/**
 * Service - Voting Candidate
 */
angular.module('firebaseVotingApp', []);

angular.module('firebaseVotingApp')
  .factory('Candidate', function () {

		return function(name) {
			var self = this;
			self.name = name;
			self.votes = [];

			self.vote = function() {
				self.votes.push(1);				
			};
		};
});

/**
 * Controller
 */

angular.module('firebaseVotingApp')
  .controller('MainCtrl', function ($scope, Candidate) {
		$scope.candidates = [
			new Candidate('Evil Cat'),
			new Candidate('Mad Elephant'),
			new Candidate('Cute Puppy')
		];
  });