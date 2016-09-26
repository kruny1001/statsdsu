var firebase = require('firebase')
//var newUserRef = new Firebase('https://statsdsu.firebaseio.com/survey/2016');

firebase.initializeApp({
	//serviceAccount:{
	//	projectId:'statsdsu',
	//	clientEmail:'',
	//	privateKey:'OVWYFzotEQezFjnG79u0dzu4iLlIz3okOmUnzhDJ',
	//},
	databaseURL: "https://statsdsu.firebaseio.com"
})

var db = firebase.database();
var ref = db.ref("survey/2016");
var surveyResult = {
	"questions":{},
	"msg":[],
	"major":[],
	"gender":[],
};

ref.once("value", function(snapshot) {

	snapshot.forEach(function(data) {
		surveyResult.msg.push(data.val().msg)
		surveyResult.gender.push(data.val().gender)
		surveyResult.major.push(data.val().major)

		data.val().questions.forEach(function(data){
			if(surveyResult.questions[data.id.toString()] === undefined)
				surveyResult.questions[data.id] = [];
			surveyResult.questions[data.id].push(data.select)
		})
	})

	console.log(surveyResult);
});

//newUserRef.on("value", function(snapshot) {
//	snapshot.forEach(function(data) {
//		console.log(data.val());
//	});
//}, function (errorObject) {
//	console.log("The read failed: " + errorObject.code);
//});