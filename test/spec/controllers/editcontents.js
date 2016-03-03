'use strict';

describe('Controller: EditcontentsCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var EditcontentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditcontentsCtrl = $controller('EditcontentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
