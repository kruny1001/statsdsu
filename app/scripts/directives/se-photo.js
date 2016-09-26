'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:sePhoto
 * @description
 * # sePhoto
 */
angular.module('statsdsuApp')
  .directive('sePhoto', function ($http,$timeout,$firebaseArray,
                                  $rootScope, $routeParams, $location, Upload, cloudinary, IMGTAG) {
    return {
      templateUrl: 'views/templates/superEditor/se-photo.html',
      scope:{
        docId:'='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        console.log(scope.docId)
        var photoRef = firebase.database().ref('materials/'+scope.docId+'/photos');
        scope.photos = $firebaseArray(photoRef)

        var database = firebase.database();
        scope.uploadFiles = function(files){
          scope.files = files;
          if (!scope.files) return;
          angular.forEach(files, function(file){
            if (file && !file.$error) {
              file.upload = Upload.upload({
                url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
                data: {
                  upload_preset: cloudinary.config().upload_preset,
                  tags: scope.docId,
                  context: 'photo=' + scope.title,
                  file: file
                }
              }).progress(function (uploadingFile) {
                file.progress = Math.round((uploadingFile.loaded * 100.0) / uploadingFile.total);
                file.status = "업로딩 : " + file.progress + "%";
              }).success(function (data, status, headers, config) {
                console.log(data);
                scope.photos.$add({id: data.public_id, orginalName: data.original_filename})
                file.status = "업로드 완료!";
                file.result = data;
              }).error(function (data, status, headers, config) {
                file.result = data;
              });
            }
          });
        };

        scope.deleteImg = function(public_id){
          $http.post('/delete',{'public_id' : public_id}).success(function(data,status){
            firebase.database().ref('public_ids/' + public_id).remove();
            console.log("Delete Public ID : " + public_id);
            console.log(data);
          }).error(function(data,status){
            console.log("Error : " + data);
          });
        }


      }
    };
  });