'use strict';

app.controller('ChallengeCtrl', function ($scope, FURL, $firebase, $location, Challenge) {


var ref = new Firebase(FURL);
	var fbChallenges = $firebase(ref.child('challenge')).$asArray();

	$scope.challenges = fbChallenges;


	$scope.createChallenge = function(challenge) {	

			$scope.challenge.status = 'open';
			$scope.challenge.itemNum = challenge.itemNumber;


ref.child('challenge').child("Marcato Hackathon").set({ title: challenge.title.toLowerCase(), code: challenge.code, itemNum: challenge.itemNumber, status: challenge.status});




		//$scope.task.name = Auth.user.profile.name;
		//$scope.task.poster = Auth.user.uid;

		Task.createTask($scope.task).then(function(ref) {
			toaster.pop('success', 'Task created successfully.');
			$scope.task = {title: '', description: '', total: '', status: 'open', gravatar: '', name: '', poster: ''};
			$location.path('/browse/' + ref.key());
		});
	};