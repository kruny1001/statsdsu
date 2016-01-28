var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("OVWYFzotEQezFjnG79u0dzu4iLlIz3okOmUnzhDJ");
var token = tokenGenerator.createToken({ uid: "uniqueId1", some: "arbitrary", data: "here" });
console.log(token);