'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:TestImageUploadCtrl
 * @description
 * # TestImageUploadCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('TestImageUploadCtrl', function ($scope, storageImageService) {
    $scope.uploadImage = function(){
      var storageRef = firebase.storage().ref();
      var file = $scope.fileModel;

      // Create the file metadata
      var metadata = {
        contentType: 'image/png'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function(error) {
          switch (error.code) {
            case 'storage/unauthorized':
              console.error('storage/unauthorized')
              break;

            case 'storage/canceled':
              // User canceled the upload
              console.error('storage/canceled')
              break;

            case 'storage/unknown':
              console.error('storage/unknown')
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, function() {
          // Upload completed successfully, now we can get the download URL
          var downloadURL = uploadTask.snapshot.downloadURL;
          console.log(downloadURL);
        });
    }


  });
