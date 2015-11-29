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
				console.log (votes);		
			};
		};
});