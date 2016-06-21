'use strict';

describe('Controller: EditContentCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var EditContentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditContentCtrl = $controller('EditContentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
