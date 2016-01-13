'use strict';

describe('Controller: PixiCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var PixiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PixiCtrl = $controller('PixiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
