/**
 * Service - Voting Candidate
 */
angular.module('votingApp', []);

angular.module('votingApp')
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