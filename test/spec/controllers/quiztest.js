'use strict';

describe('Controller: QuiztestCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var QuiztestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuiztestCtrl = $controller('QuiztestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
