'use strict';

app.controller('AuthCtrl', function ($scope, Auth) {


	$scope.login = function(){
// firebase auth using twitter
   myDataRef.authWithOAuthRedirect('twitter', function(error, authData) {
   	console.log(authData);

//      if (error) {
//        console.log("login Failed!", error);
//     } else if (authData){
//       console.log("Authenticated successfully with payload:", authData);
//       userId = authData.uid;
//       name = authData[authData.provider].displayName;
//       location.reload();
//       gravatar = authData[authData.provider].profileImageURL;
//       logged = "yes"
//       console.log(name);
//       showName();
//       console.log("User " + userId + " is logged in with " + authData.provider);

// // are they already in the system
//       myDataRef.child('user').child(userId).once("value", function(snapshot) {
//   var ifExists = snapshot.exists(); //a firebase function
//   if (ifExists){
//     console.log('user is already in the system');
// //setUserNodeId();
// data = snapshot.val();
// for (key in data) {
//   userNodeId = key;
//   console.log('user node is 1 ' + userNodeId);
// }
// if (userNodeId) {
//   myDataRef.child('user').child(userId).child(userNodeId).update({logged:logged});
  
// }
// } else {
//   myDataRef.child('user').child(userId).push({id:userId, name:name, image:gravatar, logged:logged});
//   setUserNodeId();
// }
// });
//     }
  });
}

	$scope.logout = function(){
		Auth.logout()
	}
})