'use strict';

describe('Controller: UsertestCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var UsertestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsertestCtrl = $controller('UsertestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
