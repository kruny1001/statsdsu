'use strict';

describe('Controller: TestGalCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var TestGalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestGalCtrl = $controller('TestGalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
