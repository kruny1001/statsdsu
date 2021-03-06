'use strict';

describe('Controller: SuperBlogDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var SuperBlogDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuperBlogDetailCtrl = $controller('SuperBlogDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
