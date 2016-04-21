'use strict';

describe('Controller: EditRegisterformCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var EditRegisterformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditRegisterformCtrl = $controller('EditRegisterformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
