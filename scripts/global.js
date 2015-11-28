'use strict';

var myDataRef = new Firebase('https://selfiewar.firebaseio.com/'); //point to firebase
var root = "http://localhost:8000";
//myDataRef.child('challenge').child("Marcato Hackathon").set({ title: 'Marcato Hackathon', prize: 'A slice of pizza!'});

var name = "";
var userId = "";
var userNodeId = "";
var f = "";
var authModal = $('#auth-modal').modal( {show: false });
var gravatar = "";
var authData = myDataRef.getAuth();
if (authData){
	userId = authData.uid;
	name = authData[authData.provider].displayName;
	gravatar = authData[authData.provider].profileImageURL;
	console.log('user is already logged in');

	myDataRef.child('user').child(userId).set({ id:userId, name:name, image:gravatar });
console.log(window.location.href);
if (window.location.href == root + "/#/?") {
	window.location.href = root + "/#/entry";
}
	
} 


console.log(authData);
console.log(name);
console.log(userId);


function loginJS(provider) {
myDataRef.authWithOAuthRedirect(provider, function(error, authData) {

		if (error) {
			console.log("login Failed!", error);
		} else if (authData){


			console.log("Authenticated successfully with payload:", authData);
			userId = authData.uid;
			name = authData[authData.provider].displayName;
			console.log("User " + userId + " is logged in with " + authData.provider);

			myDataRef.child('user').child(userId).once("value", function(snapshot) {

  		var ifExists = snapshot.exists(); //a firebase function
  		if (ifExists){
  			console.log('user is already in the system');
  			myDataRef.child('user').child(userId).push({id:userId, name:name});
  		}else {
  			myDataRef.child('user').child(userId).push({id:userId, name:name});
  		}
	  	});
}

});

}