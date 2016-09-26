'use strict';

describe('Controller: ClassEditCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var ClassEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassEditCtrl = $controller('ClassEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
