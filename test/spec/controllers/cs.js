'use strict';

describe('Controller: CsCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var CsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CsCtrl = $controller('CsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
