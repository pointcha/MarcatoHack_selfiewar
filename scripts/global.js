// 'use strict';

// var myDataRef = new Firebase('https://selfiewar.firebaseio.com/');
//   var name = "";
//   var userId = "";
//   var userLogged = "";
//   var userNodeId = "";
//   var f = "";
//   console.log(authData);
//   console.log(name);
//   console.log(userId);
//   var authData = myDataRef.getAuth();

//  function login(provider) {
//    myDataRef.authWithOAuthRedirect(provider, function(error, authData) {

//     if (error) {
//       console.log("login Failed!", error);
//     } else if (authData){
//       console.log("Authenticated successfully with payload:", authData);
//       userId = authData.uid;
//       name = authData[authData.provider].displayName;
//       location.reload();
//       gravatar = authData[authData.provider].profileImageURL;
//       logged = "yes"
//       console.log(name);
//       showName();
//       authModal.modal('hide');
//       console.log("User " + userId + " is logged in with " + authData.provider);

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
//   });
// }