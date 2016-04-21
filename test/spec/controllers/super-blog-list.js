'use strict';

describe('Controller: SuperBlogListCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var SuperBlogListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuperBlogListCtrl = $controller('SuperBlogListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
