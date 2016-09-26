'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:SurveyCtrl
 * @description
 * # SurveyCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('SurveyCtrl', function ($scope) {

    var ref = firebase.database().ref().child('survey').child('2016');

    $scope.selected = [];
    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };
    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };
    $scope.radioData = [
      { value: 1, desc:'I am very happy that I came to this camp.' },
      { value: 2, desc:'I knew the R programming language before attending this camp'},
      { value: 3, desc:'In this camp, I learned how to install R program.'},
      { value: 4, desc:'I learned some R commands to generate graphics from data.'},
      { value: 5, desc:'I learned some ways to read data into R.'},
      { value: 6, desc:'I learned some statistics approaches (correlations, T tests etc.)'},
      { value: 7, desc:'I learned some analytics skills in this camp. '},
      { value: 8, desc:'I learned the urgent need of people with analytics skills in the workforce.'},
      { value: 9, desc:'I am better informed on big data after this camp.'},
      { value: 10, desc:'I learned some basic statistics concepts in this camp.'},
      { value: 11, desc:'I learned some basic probability in this camp.'},
      { value: 12, desc:'I was treated nicely by the organizers.'},
      { value: 13, desc:'The food could be better.'},
      { value: 14, desc:'I liked the scheduling and mixture of activities. '},
      { value: 15, desc:'I liked the challenges (M&M, Ping Pong etc).'},
      { value: 16, desc:'This camp helped a little on my attitude towards math. '},
      { value: 17, desc:'I liked my stay in the Honors’ Hall. '},
      { value: 18, desc:'I had fun at the wellness center. '},
      { value: 19, desc:'I will recommend this camp to a friend. '},
      { value: 20, desc:'I enjoyed working on the projects with my groups.'},
      { value: 21, desc:'I liked my visit to the dairy bar.'},
      { value: 22, desc:'I maybe can use the R language later for other science projects.'},
      { value: 23, desc:'This camp has some impact on my future plan on career development. '},
      { value: 24, desc:'Comments and suggestions to make this camp better.  (Text box)'},
      { value: 25, desc:'I have always enjoyed math' },
      { value: 26, desc:'I will use what I learned in this years\' research project' },
      { value: 27, desc:'I believe math is important in my future career' },
      { value: 28, desc:'I would like to attend more camps like this' },
      { value: 29, desc:'Math comes easy for me' },
      { value: 30, desc:'I enjoy solving mathematical problems' },
      { value: 31, desc:'I would like a career in mathematics' },
      { value: 32, desc:'What I learned will help me in presenting my future research projects' },
      { value: 33, desc:'I learned of new mathematical career opportunities' },
      { value: 34, desc:'I know what college I want to attend' },
      { value: 35, desc:'Using a computer helps me understand math better' },
      { value: 36, desc:'Communicating with other students helps me ' },
      { value: 37, desc:'I have a better attitude towards mathematics' },
      { value: 38, desc:'Mathematics is needed in designing practically everything' },
      { value: 39, desc:'I learn mathematics well from lectures'},
    ];


    $scope.survey = {
      major:"",
      msg:"",
      gender:"",
      questions:[]
    }
    $scope.submit = function(){
      var incomplete=[];
      var error = false;
      var errMsg = '';
      //check radio is all filled
      $scope.radioData.forEach(function(val, index){
        if(val.select === undefined)
          incomplete.push(index)
      })

      if(incomplete.length > 0){
        errMsg += "You missed "+ incomplete.length + ' Questions\n';
        error = true;
      }

      if($scope.survey.major == "" || $scope.survey.major == undefined){
        errMsg += "You missed your intended major\n"
        error = true;
      }
      if($scope.survey.gender == "" || $scope.survey.gender == undefined){
        errMsg += "You missed your gender\n"
        error = true;
      }

      if($scope.survey.msg == "" || $scope.survey.msg == undefined){
        errMsg += "Please leave us a message.\n"
        error = true;
      }

      if(!error){

        var reduced = _.map($scope.radioData, function(t){
          return {
            select: t.select,
            id: t.value
          }})

        var newSurvey = ref.push();
        newSurvey.set({
          questions:reduced,
          major: $scope.survey.major,
          gender: $scope.survey.gender,
          msg: $scope.survey.msg,
        })
        alert("Thank you!")
        $location.path('/')
      } else{
        alert(errMsg)
      }
    }
  });
