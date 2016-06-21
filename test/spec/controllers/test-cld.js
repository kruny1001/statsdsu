'use strict';

describe('Controller: TestCldCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var TestCldCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestCldCtrl = $controller('TestCldCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
