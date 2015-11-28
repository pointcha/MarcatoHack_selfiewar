'use strict';

app.service('Auth', function(FURL, $rootScope){

	var FBRef = new Firebase(FURL);
	var auth = null;

	return {
		init: function() {
			// to be global user object
			//auth = $firebaseSimpleLogin(FBRef);
        	//return auth;
        },
        getCurrentUser: function(cb){
            //return auth.$getCurrentUser();
        },
		loginWithTwitter: function(cb){


        },
        logout: function(){
        	//auth.$logout()
        }
    };
});