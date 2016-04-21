'use strict';

/**
 * @ngdoc service
 * @name statsdsuApp.SECService
 * @description
 * # SECService
 * Factory in the statsdsuApp.
 */

angular.module('statsdsuApp')
  .factory('SECArray', function(){
    var cnts = [];
    var addCnt = function(obj){
      var index = cnts.push(obj)
      return index-1;
    }

    var getCnt = function(){
      return cnts;
    }

    var getElement = function(index){
      return cnts[index];
    }

    var removeElement = function(index){
      cnts.splice(index, 1);
    }

    var reset = function(){
      cnts = [];
    }
    return {
      addCnt: addCnt,
      getCnt: getCnt,
      getElement: getElement,
      removeElement:removeElement,
      reset: reset
    };
  })
  .factory('RCodeExeService', function(){
    function RCodeExeService(type, cntObj){
      this.type= type;
      this.code = cntObj.code;
      this.title= cntObj.title;
      this.desc= cntObj.desc;
    }

    RCodeExeService.prototype.getCode = function(){
      return this.code;
    }

    var posssibleRoles = ['admin', 'editor', 'guest'];
    function checkRole(role){
      return posssibleRoles.indexOf(rolw) !== -1;
    }
    RCodeExeService.build = function(data){
      if(!checkRole(data.role)){ return;}
      return new RCodeExeService(data.type, data.body, data.cnt);
    }

    return RCodeExeService;
  })
  .factory('SECService', function () {
    function SECService(type, cnt, body){
      this.type= type;
      this.cnt = cnt;
      this.body = body;
    }

    SECService.prototype.getCnt = function(){
      return this.cnt;
    }

    var posssibleRoles = ['admin', 'editor', 'guest'];
    function checkRole(role){
      return posssibleRoles.indexOf(rolw) !== -1;
    }
    SECService.build = function(data){
      if(!checkRole(data.role)){ return;}
      return new SECService(data.type, data.body, data.cnt);
    }

    return SECService;
  });