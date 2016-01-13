'use strict';

describe('Controller: WriteCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var WriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WriteCtrl = $controller('WriteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
