'use strict';

describe('Controller: TestVoteRemoteCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var TestVoteRemoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestVoteRemoteCtrl = $controller('TestVoteRemoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
