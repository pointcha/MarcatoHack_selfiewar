'use strict';

var myDataRef = new Firebase('https://selfiewar.firebaseio.com/');
  var name = "";
  var userId = "";
  var userLogged = "";
  var userNodeId = "";
  var f = "";
  console.log(authData);
  console.log(name);
  console.log(userId);
  var authData = myDataRef.getAuth();