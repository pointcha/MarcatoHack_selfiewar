app.controller('AuthController', function($scope, $location, toaster, Auth) {

var myDataRef = new Firebase('https://selfiewar.firebaseio.com/'); //point to firebase
//myDataRef.child('challenge').child("Marcato Hackathon").set({ title: 'Marcato Hackathon', prize: 'A slice of pizza!'});

	if(Auth.signedIn()) {
		if(window.location.href = 'http://107.170.108.225/#/login' || 'http://107.170.108.225/#/'){
			go('/entry');
		}
	}

	$scope.register = function(user) {
		Auth.register(user)
			.then(function() {
				toaster.pop('success', "Registered successfully");
				$location.path('/');
			}, function(err) {
				errMessage(err);
			});
	};

	$scope.login = function(user) {
		Auth.login(user)
			.then(function() {
				toaster.pop('success', "Logged in successfully");
				$location.path('/entry');
			}, function(err) {
				errMessage(err);
			});
	};

	$scope.logout = function() {
		Auth.logout();
		toaster.pop('success', "Logged out successfully");
		$location.path('/');
	};


	// post picture functions

	$scope.picSnap = "";

$scope.uploadPhoto = function() {
    var srcData;
    var score = 0;
    var name = Auth; 
    var file = document.getElementById('photoUpload').files[0];
    var filesSelected = document.getElementById("photoUpload").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        
        fileReader.onload = function(fileLoadedEvent) {
            srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;

            if(file){

                myDataRef.child('challenge').child('Marcato Hackathon').child('pics').set({ photo: srcData, score: score,  name: name});
            }
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}







	function errMessage(err) {

		var msg = "Unknown Error...";

		if(err && err.code) {
			switch (err.code) {
				case "EMAIL_TAKEN":
					msg = "This email has been taken"; break;
				case "INVALID_EMAIL":
					msg = "Invalid email"; break;
				case "NETWORK_ERROR":
					msg = "Network error"; break;
				case "INVALID_PASSWORD":
					msg = "Invalid password"; break;
				case "INVALID_USER":
					msg = "Invalid user"; break;
			}
		}

		toaster.pop('error', msg);
	};


// straight navigation redirection
	$scope.go = function ( path ) {
  $location.path( path );
};


});