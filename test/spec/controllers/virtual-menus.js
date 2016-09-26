'use strict';

describe('Controller: VirtualMenusCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var VirtualMenusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VirtualMenusCtrl = $controller('VirtualMenusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
