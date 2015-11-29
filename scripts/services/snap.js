'use strict';

app.factory('Pic', function(FURL, $firebase, Auth) {
	var ref = new Firebase(FURL);
	var tasks = $firebase(ref.child('pic')).$asArray();
	var user = Auth.user;

	var Pic = {
		all: pics,

		getPic: function(taskId) {
			return $firebase(ref.child('pic').child(taskId));
		},

		createPic: function(task) {
			task.datetime = Firebase.ServerValue.TIMESTAMP;
			return pics.$add(pic).then(function(newPic) {
				
				// Create User-Tasks lookup record for POSTER
				var obj = {
					score: 0
					name: Auth.user.profile.name

				};

				return $firebase(ref.child('user_pics').child(pic.poster)).$push(obj);
			});
		},

	};

	return Pic;

});