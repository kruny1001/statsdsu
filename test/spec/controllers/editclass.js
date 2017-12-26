'use strict';

describe('Controller: EditclassCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var EditclassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditclassCtrl = $controller('EditclassCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
