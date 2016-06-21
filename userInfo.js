var Firebase = require('firebase')
var newUserRef = new Firebase('https://statsdsu.firebaseio.com/newUsers');

newUserRef.on("value", function(snapshot) {

	snapshot.forEach(function(data) {
		console.log(data.val().$id);
	});
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});