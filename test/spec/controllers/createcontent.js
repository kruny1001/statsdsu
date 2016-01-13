'use strict';

describe('Controller: CreatecontentCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var CreatecontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecontentCtrl = $controller('CreatecontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
