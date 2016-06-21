'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:TestCldCtrl
 * @description
 * # TestCldCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('TestCldCtrl', function ($scope,$http,$timeout,
    $rootScope, $routeParams, $location, Upload, cloudinary, IMGTAG
  ) {
    var database = firebase.database();
    $scope.uploadFiles = function(files){
      $scope.files = files;
      if (!$scope.files) return;
      angular.forEach(files, function(file){
        if (file && !file.$error) {
          file.upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
              upload_preset: cloudinary.config().upload_preset,
              tags: IMGTAG,
              context: 'photo=' + $scope.title,
              file: file
            }
          }).progress(function (uploadingFile) {
            file.progress = Math.round((uploadingFile.loaded * 100.0) / uploadingFile.total);
            file.status = "업로딩 : " + file.progress + "%";
          }).success(function (data, status, headers, config) {
            console.log(data);
            database.ref('public_ids/' + data.public_id).set({
              value:true
            });
            file.status = "업로드 완료!";
            file.result = data;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    };



    firebase.database().ref('public_ids').on('value',function(snapshot){
      $scope.photos = [];
      snapshot.forEach(function(childSnapshot){
        $scope.photos.push({'public_id':childSnapshot.key});
      });
      $timeout(function(){
        console.log("UPDATE ANGULAR UI");
      });
    });

    $scope.deleteImg = function(public_id){
      $http.post('/delete',{'public_id' : public_id}).success(function(data,status){
        firebase.database().ref('public_ids/' + public_id).remove();
        console.log("Delete Public ID : " + public_id);
        console.log(data);
      }).error(function(data,status){
        console.log("Error : " + data);
      });
    }

  });
