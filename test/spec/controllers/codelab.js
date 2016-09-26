'use strict';

describe('Controller: CodelabCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var CodelabCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CodelabCtrl = $controller('CodelabCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
