'use strict';

app.controller('NavController', function($scope, $location, toaster, Auth) {

	$scope.currentUser = Auth.user;
	$scope.signedIn = Auth.signedIn;

  $scope.postButton = function() { 
    $location.path('/snap');
  };
	
});