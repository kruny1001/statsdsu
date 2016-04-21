'use strict';

describe('Controller: SuperEditorTestCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var SuperEditorTestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuperEditorTestCtrl = $controller('SuperEditorTestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
