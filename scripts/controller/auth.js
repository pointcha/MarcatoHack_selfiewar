'use strict';

app.controller('AuthCtrl', function ($scope, $location) {


	$scope.login = function(provider){

		$location.path('/entry');

// myDataRef.authWithOAuthRedirect(provider, function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });

}

	$scope.logout = function(){
		Auth.logout()
	}
})