'use strict';

describe('Controller: MenuTestCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var MenuTestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuTestCtrl = $controller('MenuTestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
