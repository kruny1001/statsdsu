'use strict';

describe('Controller: TestChatCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var TestChatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestChatCtrl = $controller('TestChatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
