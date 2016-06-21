'use strict';

describe('Controller: TestImageUploadCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var TestImageUploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestImageUploadCtrl = $controller('TestImageUploadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
