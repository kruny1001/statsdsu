'use strict';

describe('Controller: SuperEditorDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var SuperEditorDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuperEditorDetailCtrl = $controller('SuperEditorDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
