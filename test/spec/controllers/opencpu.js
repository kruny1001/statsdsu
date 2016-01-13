'use strict';

describe('Controller: OpencpuCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var OpencpuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpencpuCtrl = $controller('OpencpuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
