'use strict';

describe('Controller: TempUserListCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var TempUserListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TempUserListCtrl = $controller('TempUserListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
