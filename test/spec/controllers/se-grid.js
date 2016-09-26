'use strict';

describe('Controller: SeGridCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var SeGridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeGridCtrl = $controller('SeGridCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
