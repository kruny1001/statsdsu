'use strict';

describe('Controller: TestClassCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var TestClassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestClassCtrl = $controller('TestClassCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
