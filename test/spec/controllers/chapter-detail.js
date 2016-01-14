'use strict';

describe('Controller: ChapterDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var ChapterDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterDetailCtrl = $controller('ChapterDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
